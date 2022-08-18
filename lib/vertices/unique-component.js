import {BaseActionListener} from "../events/base-action-listener.js";

/**
 * UniqueComponent provide utility functions to mark SVG nodes
 * with an UUID value. This comes in handy when implementing action
 * listeners such as click, drag and so on
 */
export class UniqueComponent extends BaseActionListener{

    constructor() {
        super();
        this._uuid = crypto.randomUUID();
    }

    set uuid(value) {
        this._uuid = value;
    }

    markNode(svgNode) {
        // sanity check
        if(svgNode === undefined || svgNode === null)
            throw "svgNode can't be null/undefined"

        svgNode.attr('component_uuid', this._uuid);
    }
}