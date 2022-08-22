import { Edge } from "../edges/edge.js";
import { ConnectorType, EdgeConnector } from "../vertices/connector.js";

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

    /**
     * Check if input connector is already being used
     * @param {EdgeConnector} connector - input connector 
     * @returns true if connector is being used, false otherwise
     */
    isInputConnectorUsed(connector){
        if(connector.connectorType !== ConnectorType.INPUT)
            throw `connector provided isn't of type Input`;

        // input connectors always the only ones to receive edge connection, 
        // hence they are always the vertexHolder B       
        return (this.edges.some((i) =>  i.vertexHolderB.connector._uuid === connector._uuid))
    }

    /**
     * Check if adding the specified edge would cause a graph cycle
     * @param {Edge} edgeCandidate - edge that we want to add
     * @returns true if cycle would be created, false otherwise
     */
    predictCycle(edgeCandidate){
        let futureEdges = [...this.edges, edgeCandidate];
        let connDegree = new Map();
        let stack = [];
        let sorted = [];

        // get a map of vertex dependencies
        futureEdges.forEach((ed) => {            
            let vertexA = ed.vertexHolderA.vertex;
            let vertexB = ed.vertexHolderB.vertex;

            if(!connDegree.has(vertexA._uuid))
                connDegree.set(vertexA._uuid, {in: [], out: []});

            if(!connDegree.has(vertexB._uuid))
                connDegree.set(vertexB._uuid, {in: [], out: []});
            
            let connVetA = connDegree.get(vertexA._uuid);
            connVetA.out.push(vertexB._uuid);

            let connVetB = connDegree.get(vertexB._uuid);
            connVetB.in.push(vertexA._uuid);            

            connDegree.set(vertexA._uuid, connVetA);
            connDegree.set(vertexB._uuid, connVetB);
        });

        const findNoDepVertices = function(){
            for (const [key, value] of connDegree) {
                if(value.in.length === 0)
                    stack.push({key: key, value: value});
            }
        };
        findNoDepVertices();        
        
        while(stack.length !== 0){
            let item = stack.pop();
            connDegree.delete(item.key);
            sorted.push(item.key);

            item.value.out.forEach((outVetId)=> {
                let idx = connDegree.get(outVetId).in.indexOf(item.key);
                connDegree.get(outVetId).in.splice(idx, 1);
            });

            findNoDepVertices();
        }

        console.debug('topological sort would be', sorted);
        return connDegree.size !== 0;
    }

    iterate(callback) {
        this.edges.forEach((value) => callback(value));
    }
}