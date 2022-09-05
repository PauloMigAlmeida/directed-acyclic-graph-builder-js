'use strict';

export class VertexSerializable {

    constructor(uuid, transform, coordinate, size, title, inputs, outputs) {
        this.uuid = uuid;
        this.transform = transform;
        this.coordinate = coordinate;
        this.size = size;
        this.title = title;
        this.inputs = inputs;
        this.outputs = outputs;
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
    
}