'use strict';

import {ACTION_TYPE, isFunction} from "./event";

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
        const jointParams = [this.type, ...this.params, ...additionalParams];
        this.callback.apply(this, jointParams);
    }

}

export class BaseActionListener {

    constructor() {
        this.listeners = [];
    }

    /**
     * Add a callback listener for a specific action
     * @param type - type of action the listener must be added to
     * @param callback - callback function
     * @param params - initial parameters. Useful for passing the context(this) around.
     */
    addActionListener(type, callback, params) {
        // sanity checks
        if (!Object.values(ACTION_TYPE).includes(type))
            throw `Action Listener '${type}' isn't supported for '${this.constructor.name}'`;
        else if (!isFunction(callback))
            throw `callback must contain a function reference`;

        this.listeners.push(new GenericActionHolder(type, callback, params));        
    }

    /**
     * Remove all listeners this object subscribed to
     */
    removeAllListeners(){
        this.listeners = [];
    }

    /**
     * Trigger listeners for a given event type
     * @param type - Type of listener to be triggered
     * @param additionalParams - array of parameters to bubble up the listening chain
     */
    triggerEvent(type, additionalParams) {
        this.listeners
            .filter((i) => i.type === type)
            .forEach((value) => value.invoke(additionalParams));
    }
}
