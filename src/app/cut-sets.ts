import type {FTANode} from "./definitions.ts";
import type {VisuallyJsModel} from "@visuallyjs/browser-ui";

function getCombinations<T>(arr: T[], k: number): T[][] {
    const result: T[][] = [];
    const recurse = (start: number, combo: T[]) => {
        if (combo.length === k) {
            result.push(combo);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            recurse(i + 1, [...combo, arr[i]]);
        }
    };
    recurse(0, []);
    return result;
}

export function computeCutSets(model:VisuallyJsModel):Array<Array<FTANode>> {

    const nodes = model.getNodes();
    const nodesMap = new Map(nodes.map(n => [n.id, n]));
    const topEvent = nodes.find(n => n.type === 'top-event');

    if (!topEvent) {
        return []
    }

    const memo = new Map<string, string[][]>();

    const getChildId = (child: any): string => typeof child === 'string' ? child : child.id;

    const combineAnd = (childCutSets: string[][][]): string[][] => {
        if (childCutSets.some(cs => cs.length === 0)) {
            return [];
        }
        let accumulator: string[][] = [[]]; // Start with a neutral element: a set containing one empty set.
        for (const nextCutSetList of childCutSets) {
            const newAccumulator: string[][] = [];
            for (const existingSet of accumulator) {
                for (const newSet of nextCutSetList) {
                    const combinedSet = Array.from(new Set([...existingSet, ...newSet]));
                    newAccumulator.push(combinedSet);
                }
            }
            accumulator = newAccumulator;
        }
        return accumulator;
    };

    const getCutSets = (nodeId: string): string[][] => {
        if (memo.has(nodeId)) {
            return memo.get(nodeId) as string[][];
        }

        const node = nodesMap.get(nodeId);
        if (!node) return [];

        if (node.type === 'basic-event' || node.type === 'undeveloped-event' || node.type === 'external-event') {
            return [[nodeId]];
        }

        const children = node.getTargetEdges().map(edge => edge.source);
        if (children.length === 0) return [];

        let result: string[][] = [];

        switch(node.type) {
            case 'and-gate':
            case 'priority-and-gate':
            case 'inhibit-gate': {
                const childCutSets = children.map(child => getCutSets(getChildId(child)));
                result = combineAnd(childCutSets);
                break;
            }
            case 'voting-gate': {
                const k = (node.data as FTANode).k || children.length;
                const childCutSets = children.map(child => getCutSets(getChildId(child)));
                const childCombinations = getCombinations(childCutSets, k);

                const combinedSets = childCombinations.map(combo => combineAnd(combo));
                result = combinedSets.flat();
                break;
            }
            case 'or-gate':
            case 'xor-gate':
            case 'top-event':
            default: { // Default to OR logic
                result = children.flatMap(child => getCutSets(getChildId(child)));
                break;
            }
        }

        memo.set(nodeId, result);
        return result;
    };

    const rawCutSets = getCutSets(topEvent.id);

    const sortedCutSets = rawCutSets.map(s => new Set(s)).sort((a, b) => a.size - b.size);
    const minSets: Set<string>[] = [];

    for (const currentSet of sortedCutSets) {
        let isMinimal = true;
        // A set is not minimal if it is a superset of any set already in minSets
        for (const minimalSet of minSets) {
            if ([...minimalSet].every(item => currentSet.has(item))) {
                isMinimal = false;
                break;
            }
        }
        if (isMinimal) {
            // Before adding, remove any sets from minSets that are supersets of the currentSet
            for(let i = minSets.length - 1; i >= 0; i--) {
                if([...currentSet].every(item => minSets[i].has(item))) {
                    minSets.splice(i, 1);
                }
            }
            minSets.push(currentSet);
        }
    }

    return minSets.map(set =>
        //@ts-ignore
        [...set].map(id => nodesMap.get(id).data as FTANode)
    )

}
