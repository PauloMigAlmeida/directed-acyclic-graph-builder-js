export class VertexContainer {

    constructor() {
        this.vertices = [];
    }

    append(vertex){
        this.vertices.push(vertex);
    }

    findVertexConnectorByUUID(uuid){
        let helper = (arr, uuid) => arr.find((item) => item._uuid === uuid);

        for(let i=0; i < this.vertices.length; i++){
            const tmpVertex = this.vertices[i];

            let tmpConnector = null;
            if(!(tmpConnector = helper(tmpVertex.inputs, uuid)))
                tmpConnector = helper(tmpVertex.outputs, uuid);

            if(tmpConnector)
                return new VertexConnectorHolder(tmpVertex, tmpConnector);

        }
        return null;
    }

    iterate(callback) {
        this.vertices.forEach((value) => callback(value));
    }

}

export class VertexConnectorHolder {

    constructor(vertex, connector) {
        this.vertex = vertex;
        this.connector = connector;
    }
}