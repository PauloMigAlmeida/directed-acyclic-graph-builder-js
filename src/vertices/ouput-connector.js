import { EdgeConnector, ConnectorType } from "./connector";
import { ACTION_TYPE } from "../events/event";
import * as d3 from "d3";

export class OutputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.OUTPUT, order, name, type);
    }

    draw(drawingContext, x, y, maxWidth) {
        super.draw(drawingContext, x, y, maxWidth);        
        this.setupEvents();
        return this.drawingContext;
    }

    setupEvents() {
        this.edgeConnectorEl.call(d3.drag()
            .on('start', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, [event]))
            .on('drag', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, [event]))
            .on('end', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, [event])));        
    }

    getEdgeConnectorConfig(x, y, maxWidth) {
        return {
            x: x + maxWidth - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
            y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
            class: 'output',
            width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
            height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
        };
    }
}