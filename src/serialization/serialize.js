'use strict';

import { MouseCoordinate, ShapeSize } from "../misc/pojo.js";
import { ConnectorType, InputVertexConnector, OutputVertexConnector } from "../vertices/connector.js";
import { Vertex } from "../vertices/vertex.js";

export class GraphSerializable {

    constructor(vertices, edges){
        this.vertices = vertices;
        this.edges = edges;
    }
    
}

export class VertexSerializable {

    constructor(uuid, coordinate, size, title, inputs, outputs) {
        this.uuid = uuid;
        this.coordinate = coordinate;
        this.size = size;
        this.title = title;
        this.inputs = inputs;
        this.outputs = outputs;
    }

    deserialize() {
        let vertex = new Vertex(
            new MouseCoordinate(this.coordinate.x, this.coordinate.y),
            new ShapeSize(this.size.width, this.size.height),
            this.title,
            this.inputs.map((i) => new VertexConnectorSerializable(i.uuid, i.connectorType, i.order, i.name, i.type).deserialize()),
            this.outputs.map((i) => new VertexConnectorSerializable(i.uuid, i.connectorType, i.order, i.name, i.type).deserialize()),
        );

        vertex.uuid = this.uuid;

        return vertex;
    }

}

export class VertexConnectorSerializable {

    constructor(uuid, connectorType, order, name, type) {
        this.uuid = uuid;
        this.connectorType = connectorType;
        this.order = order;
        this.name = name;
        this.type = type;
    }
    
    deserialize() {
        let connector = null;
        if(this.connectorType === ConnectorType.INPUT){
            connector = new InputVertexConnector(this.order, this.name, this.type);
        }else{
            connector = new OutputVertexConnector(this.order, this.name, this.type);
        }
        connector.uuid = this.uuid;
        return connector;
    }
}

export class EdgeSerializable {

    constructor(from_connector, to_connector) {
        this.from_connector = from_connector;
        this.to_connector = to_connector;
    }

}