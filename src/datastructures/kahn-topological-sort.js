'use strict';

export class ConnectionDegree {

    constructor(inputEdges, outputEdges){
        this.inputEdges = inputEdges;
        this.outputEdges = outputEdges;
    }

}

/**
 * One of the most well-known topological sorting algorithms, invented in 1962
 * Implementation inspired by: https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm
 */
export class KahnTopologicalSort {
    
    /**
     * Perform a topological sort of vertices using Kahn's algorithm
     * @param {ConnectionDegree} connDegMap - connection degree map of all vertices and edges
     */
    static sort(connDegMap){
        let stack = [];
        let sorted = [];

        for (const [key, value] of connDegMap) {
            if(value.inputEdges.length === 0){
                stack.push({key: key, value: value});
                connDegMap.delete(key);
            }                    
        }
        
        while(stack.length !== 0){
            let item = stack.pop();
            sorted.push(item.key);          

            item.value.outputEdges.forEach((outVetId)=> {
                let connDeg = connDegMap.get(outVetId);

                if(connDeg && connDeg.inputEdges.length > 0){
                    let idx = connDeg.inputEdges.indexOf(item.key);
                    connDeg.inputEdges.splice(idx, 1);                                       

                    if(connDeg.inputEdges.length == 0){
                        stack.push({key: outVetId, value: connDeg});
                        connDegMap.delete(outVetId);
                    } else {
                        connDegMap.set(outVetId, connDeg);
                    }                        
                }
            });
        }

        if(connDegMap.size > 0){
            throw "at least a cycle was found, hence topological sort isn't possible"
        }        
        return sorted;        
    }
}