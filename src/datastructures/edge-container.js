'use strict';

import { BaseActionListener } from "../events/base-action-listener";
import { ACTION_TYPE } from "../events/event";
import { ConnectorType } from "../vertices/connector";
import { ConnectionDegree, KahnTopologicalSort } from "./kahn-topological-sort";

export class EdgeContainer extends BaseActionListener {
    constructor() {
        super();
        this.edges = [];
    }

    /**
     * Append edge to the list of edges that a graph holds if that doesn't exist yet
     * @param {Edge} edge - Edge instance containing references to both vertices
     * @returns true if item is appended or false if item is already in the list
     */
    append(edge) {
        // check for duplicates        
        let uuia_a = edge.vertexHolderA.connector._uuid;
        let uuia_b = edge.vertexHolderB.connector._uuid;
        let exists = this.edges.some((i) =>
            i.vertexHolderA.connector._uuid == uuia_a &&
            i.vertexHolderB.connector._uuid == uuia_b);
        
        if (!exists){
            this.edges.push(edge);
            this.triggerEvent(ACTION_TYPE.EDGE_ADDED_ACTION, [edge]);
        }
            

        return !exists;
    }

    /**
     * Check if input connector is already being used
     * @param {EdgeConnector} connector - input connector 
     * @returns true if connector is being used, false otherwise
     */
    isInputConnectorUsed(connector) {
        if (connector.connectorType !== ConnectorType.INPUT)
            throw `connector provided isn't of type Input`;

        // input connectors always the only ones to receive edge connection, 
        // hence they are always the vertexHolder B       
        return (this.edges.some((i) => i.vertexHolderB.connector._uuid === connector._uuid))
    }

    /**
     * Check if adding the specified edge would cause a graph cycle
     * @param {Edge} edgeCandidate - edge that we want to add
     * @returns true if cycle would be created, false otherwise
     */
    predictCycle(edgeCandidate) {
        let futureEdges = [...this.edges, edgeCandidate];

        const connDegree = new Map();

        // get a map of vertex dependencies
        futureEdges.forEach((ed) => {
            let vertexA = ed.vertexHolderA.vertex;
            let vertexB = ed.vertexHolderB.vertex;

            if (!connDegree.has(vertexA._uuid)) {
                connDegree.set(vertexA._uuid, new ConnectionDegree([], []));
            }

            if (!connDegree.has(vertexB._uuid)) {
                connDegree.set(vertexB._uuid, new ConnectionDegree([], []));
            }

            let connVetA = connDegree.get(vertexA._uuid);
            connVetA.outputEdges.push(vertexB._uuid);

            let connVetB = connDegree.get(vertexB._uuid);
            connVetB.inputEdges.push(vertexA._uuid);

            connDegree.set(vertexA._uuid, connVetA);
            connDegree.set(vertexB._uuid, connVetB);
        });

        try {
            let sorted = KahnTopologicalSort.sort(new Map(connDegree));
            console.debug('topological sort would be', sorted);
            return false;
        } catch (error) {
            return true;
        }
    }

    iterate(callback) {
        this.edges.forEach((value) => callback(value));
    }

    /**
     * Remove existing edges between vertices in which on of them is
     * the vertex specified
     * @param {Vertex} vertex 
     */
    removeEdgesByVertex(vertex) {
        const selectionCriteria = (edge) => {
            const vA = edge.vertexHolderA.vertex;
            const vB = edge.vertexHolderB.vertex;
            return [vA._uuid, vB._uuid].includes(vertex._uuid);
        };

        this.remove(selectionCriteria);
    }

    remove(criteria) {
        // remove from svg
        this.edges
            .filter((i) => criteria(i))
            .forEach((i) => {
                i.remove();
                this.triggerEvent(ACTION_TYPE.EDGE_REMOVED_ACTION, [i]);
            });

        // remove from list
        this.edges = this.edges.filter((i) => !criteria(i));
    }

    removeSelected() {
        const criteria = (i) => i.isSelected();
        this.remove(criteria);
    }

    removeAll() {
        this.remove(() => true);
    }
}