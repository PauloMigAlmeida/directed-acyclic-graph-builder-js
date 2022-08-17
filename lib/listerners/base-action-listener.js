import {ACTION_TYPE, isFunction} from "./event.js";

export class GenericActionHolder {

    constructor(type, callback, params) {
        this.type = type;
        this.callback = callback;
        this.params = params || [];
    }

    /**
     * utility function to invoke the callback
     * @param additionalParams - additional parameters to be passed to the callback
     */
    invoke(additionalParams) {
        const jointParams = this.params.concat(additionalParams);
        this.callback.apply(this, jointParams);
    }

}

export class BaseActionListener {

    constructor() {
        this.clickListenersList = [];
    }

    /**
     * Add a callback listener for a specific action
     * @param type - type of action the listener must be added to
     * @param callback - callback function
     * @param params - initial parameters. Useful for passing the context(this) around.
     */
    addActionListener(type, callback, params) {
        // sanity checks
        if (type !== ACTION_TYPE.EDGE_CONN_CLICK_ACTION)
            throw `Action Listener '${type}' isn't supported for '${this.constructor.name}'`;
        else if (!isFunction(callback))
            throw `callback must contain a function reference`;

        this.clickListenersList.push(new GenericActionHolder(type, callback, params));
    }
}
