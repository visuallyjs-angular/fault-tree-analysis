export default {
    // the node factory is where you can setup initial values for new items added to the dataset. Here, we ensure every item has a label, and for `basic-event` vertices, we set an initial probability of 0.1.
    nodeFactory: (_model: any, type: string, data: any, continueCallback: Function, _abortCallback: Function) => {
        data.label = data.label || `New ${type}`;
        if (type === "basic-event") {
            data.probability = 0.1
        }
        continueCallback(data);
        return true;
    }
}
