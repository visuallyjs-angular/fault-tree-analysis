import {type ShapeSet} from "@visuallyjs/browser-ui"

export const FTA_SHAPES: ShapeSet = {
    id:"fta",
    name: "fta",
    shapes: [
        // Events
        {
            type: "top-event",
            label: "Top Event",
            initialSize: { width: 120, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 120 80" width="{{width}}" height="{{height}}"><rect vector-effect="non-scaling-stroke" x="0" y="0" width="120" height="80" stroke-width="2"/></svg>`,
            payload:{
                label:"Root"
            }
        },
        {
            type: "intermediate-event",
            label: "Intermediate Event",
            initialSize: { width: 120, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 120 80" width="{{width}}" height="{{height}}"><rect vector-effect="non-scaling-stroke" x="0" y="0" width="120" height="80" stroke-width="2"/></svg>`,
            payload:{
                label:"Event"
            }
        },
        {
            type: "basic-event",
            label: "Basic Event",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><circle vector-effect="non-scaling-stroke" cx="40" cy="40" r="40" stroke-width="2"/></svg>`,
            payload:{
                label:"Basic Event"
            }
        },
        {
            type: "undeveloped-event",
            label: "Undeveloped Event",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><polygon vector-effect="non-scaling-stroke" points="40,0 80,40 40,80 0,40" stroke-width="2"/></svg>`,
            payload:{
                label:"Undeveloped Event"
            }
        },
        {
            type: "conditioning-event",
            label: "Conditioning Event",
            initialSize: { width: 120, height: 60 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 120 60" width="{{width}}" height="{{height}}"><ellipse vector-effect="non-scaling-stroke" cx="60" cy="30" rx="60" ry="30" stroke-width="2"/></svg>`,
            payload:{
                label:"Conditioning Event"
            }
        },
        {
            type: "external-event",
            label: "External Event",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><polygon vector-effect="non-scaling-stroke" points="0,20 40,0 80,20 80,60 40,80 0,60" stroke-width="2"/></svg>`,
            payload:{
                label:"External Event"
            }
        },
        {
            type: "transfer-in",
            label: "Transfer In",
            initialSize: { width: 60, height: 60 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 60 60" width="{{width}}" height="{{height}}"><polygon vector-effect="non-scaling-stroke" points="0,0 60,30 0,60" stroke-width="2"/></svg>`,
            payload:{
                label:"Transfer In"
            }
        },
        {
            type: "transfer-out",
            label: "Transfer Out",
            initialSize: { width: 60, height: 60 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 60 60" width="{{width}}" height="{{height}}"><polygon vector-effect="non-scaling-stroke" points="0,0 60,30 0,60" stroke-width="2"/></svg>`,
            payload:{
                label:"Transfer Out"
            }
        },
        // Gates
        {
            type: "and-gate",
            label: "AND Gate",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><path vector-effect="non-scaling-stroke" d="M 0 80 L 0 40 A 40 40 0 0 1 80 40 L 80 80 Z" stroke-width="2"/></svg>`,
            payload:{
                label:"AND"
            }
        },
        {
            type: "or-gate",
            label: "OR Gate",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><path vector-effect="non-scaling-stroke" d="M 0 80 Q 40 70 80 80 L 80 20 Q 40 -20 0 20 Z" stroke-width="2"/></svg>`,
            payload:{
                label:"OR"
            }
        },
        {
            type: "xor-gate",
            label: "XOR Gate",
            initialSize: { width: 80, height: 90 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 90" width="{{width}}" height="{{height}}"><path vector-effect="non-scaling-stroke" d="M 0 80 Q 40 70 80 80 L 80 20 Q 40 -20 0 20 Z M 0 90 Q 40 80 80 90" stroke-width="2"/></svg>`,
            payload:{
                label:"XOR"
            }
        },
        {
            type: "priority-and-gate",
            label: "Priority AND Gate",
            initialSize: { width: 80, height: 100 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 100" width="{{width}}" height="{{height}}"><path vector-effect="non-scaling-stroke" d="M 0 80 L 0 40 A 40 40 0 0 1 80 40 L 80 80 Z M 0 90 L 80 90" stroke-width="2"/></svg>`,
            payload:{
                label:"AND (priority)"
            }
        },
        {
            type: "inhibit-gate",
            label: "Inhibit Gate",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><polygon vector-effect="non-scaling-stroke" points="40,0 80,20 80,60 40,80 0,60 0,20" stroke-width="2"/></svg>`,
            payload:{
                label:"Inhibit"
            }
        },
        {
            type: "voting-gate",
            label: "Voting Gate",
            initialSize: { width: 80, height: 80 },
            template: `<svg preserveAspectRatio="none" stroke="{{outline}}" overflow="visible" viewBox="0 0 80 80" width="{{width}}" height="{{height}}"><path vector-effect="non-scaling-stroke" d="M 0 80 Q 40 70 80 80 L 80 20 Q 40 -20 0 20 Z" stroke-width="2"/><text x="35" y="65" font-size="20">k/n</text></svg>`,
            payload:{
                label:"Voting"
            }
        }
    ]
}
