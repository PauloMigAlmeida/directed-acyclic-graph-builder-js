/* SPDX-License-Identifier: GPL-3.0-only */
'use strict';

import { ScheduledActionListener } from "../events/base-action-listener";
import { ACTION_TYPE } from "../events/event";

export class VertexContainer extends ScheduledActionListener {

    constructor() {
        super();
        this.vertices = [];
    }

    append(vertex) {
        // Add default listeners                
        const eventsOfInterest = [
            ACTION_TYPE.CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION,
            ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION,
            ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION,
            ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION,
            ACTION_TYPE.VERT_DRAGGING_ACTION
        ];             
        this.listeners
            .filter((e) => eventsOfInterest.includes(e.type))
            .forEach((e) => vertex.addActionListener(e.type, e.callback, e.params));

        this.vertices.push(vertex);        
        this.scheduleEvent(ACTION_TYPE.VERT_ADDED_ACTION, [vertex]);
    }

    findVertexConnectorByUUID(uuid) {
        let helper = (arr, uuid) => arr.find((item) => item._uuid === uuid);

        for (let i = 0; i < this.vertices.length; i++) {
            const tmpVertex = this.vertices[i];

            let tmpConnector = null;
            if (!(tmpConnector = helper(tmpVertex.inputs, uuid)))
                tmpConnector = helper(tmpVertex.outputs, uuid);

            if (tmpConnector)
                return new VertexConnectorHolder(tmpVertex, tmpConnector);

        }
        return null;
    }

    iterate(callback) {
        this.vertices.forEach((value) => callback(value));
    }

    findAllSelected() {
        return this.vertices.filter((i) => i.isSelected());
    }

    remove(criteria) {
        let holder = [];
        
        // remove from svg
        this.vertices
            .filter((i) => criteria(i))
            .forEach((i) => {
                i.remove();
                holder.push(i);                
            });

        // remove from list
        this.vertices = this.vertices.filter((i) => !criteria(i));

        // bubble up events (this has to be the last step to avoid a variety of issues)
        holder.forEach((i) => this.triggerEvent(ACTION_TYPE.VERT_REMOVED_ACTION, [i]));
    }

    removeSelected() {
        const criteria = (i) => i.isSelected();
        this.remove(criteria);
    }

    removeAll() {
        this.remove(() => true);
    }

}

export class VertexConnectorHolder {

    constructor(vertex, connector) {
        this.vertex = vertex;
        this.connector = connector;
    }
}