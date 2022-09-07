/* SPDX-License-Identifier: GPL-3.0-only */
'use strict';

import {BaseActionListener} from "../events/base-action-listener";

/**
 * UniqueComponent provide utility functions to mark SVG nodes
 * with a UUID value. This comes in handy when implementing action
 * listeners such as click, drag and so on as you need to retrieve
 * the object references from internal data structures.
 */
export class UniqueComponent extends BaseActionListener{

    constructor(uuid_attr) {
        super();
        this.uuid_attr = uuid_attr;
        this._uuid = crypto.randomUUID();
    }

    set uuid(value) {
        this._uuid = value;
    }

    markNode(svgNode) {
        // sanity check
        if(svgNode === undefined || svgNode === null)
            throw "svgNode can't be null/undefined"

        svgNode.attr(this.uuid_attr, this._uuid);
    }
}