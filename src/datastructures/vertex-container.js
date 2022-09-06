'use strict';

import { BaseActionListener } from "../events/base-action-listener";
import { ACTION_TYPE } from "../events/event";

export class VertexContainer extends BaseActionListener {

    constructor() {
        super();
        this.vertices = [];
    }

    append(vertex) {
        this.vertices.push(vertex);
        this.triggerEvent(ACTION_TYPE.VERT_ADDED_ACTION, [vertex]);
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
        // remove from svg
        this.vertices
            .filter((i) => criteria(i))
            .forEach((i) => {
                i.remove();
                this.triggerEvent(ACTION_TYPE.VERT_REMOVED_ACTION, [i]);
            });

        // remove from list
        this.vertices = this.vertices.filter((i) => !criteria(i));
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