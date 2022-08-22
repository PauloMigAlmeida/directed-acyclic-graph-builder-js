import { Edge } from "../edges/edge.js";

export class EdgeContainer {
    constructor() {
        this.edges = [];
    }

    /**
     * Append edge to the list of edges that a graph holds if that doesn't exist yet
     * @param {Edge} edge - Edge instance containing references to both vertices
     * @returns true if item is appended or false if item is already in the list
     */
    append(edge){
        // check for duplicates        
        let uuia_a = edge.vertexHolderA.connector._uuid;
        let uuia_b = edge.vertexHolderB.connector._uuid;
        let exists = this.edges.some((i) => 
                                i.vertexHolderA.connector._uuid == uuia_a && 
                                i.vertexHolderB.connector._uuid == uuia_b);
        if(!exists)
            this.edges.push(edge);  
        
        return !exists;
    }

    isInputConnectorUsed(uuid){
        // input connectors always the only ones to receive edge connection, 
        // hence they are always the vertexHolder B       
        return (this.edges.some((i) =>  i.vertexHolderB.connector._uuid === uuid))
    }

    iterate(callback) {
        this.edges.forEach((value) => callback(value));
    }
}