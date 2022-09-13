import { EdgeConnector, ConnectorType } from "./connector";
import { ACTION_TYPE } from "../events/event";

export class InputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.INPUT, order, name, type);
    }

    draw(drawingContext, x, y, maxWidth) {
        super.draw(drawingContext, x, y, maxWidth);        
        this.setupEvents();
        return this.drawingContext;
    }

    setupEvents() {                
        this.edgeConnectorEl.on('click', (event) => {
            event.stopPropagation();
            this.triggerEvent(ACTION_TYPE.EDGE_CONN_CLICK_ACTION, [this, event]);
        });
    }

    getEdgeConnectorConfig(x, y, _maxWidth) {
        return {
            x: x - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
            y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
            class: 'input',
            width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
            height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
        };
    }

}