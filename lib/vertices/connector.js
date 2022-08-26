'use strict';

import { TextOverflow } from "../misc/text-overflow.js";
import { ACTION_TYPE } from "../events/event.js";
import { UniqueComponent } from "./unique-component.js";

export const ConnectorType = {
    INPUT: 1,
    OUTPUT: 2,
}

export class EdgeConnector extends UniqueComponent {

    static FONT_SIZE = { parameters: 12 };
    static MARGIN = { left: 15, right: 15 };
    static SEPARATOR_WIDTH = 10;
    static EDGE_CONNECTOR_SIZE = { width: 14, height: 14 };
    static UUID_ATTR = 'connector-uuid';

    constructor(connectorType, order, name, type) {
        super(EdgeConnector.UUID_ATTR);
        this.connectorType = connectorType;
        this.order = order;
        this.name = name;
        this.type = type;

        this.drawingContext = null;
        this.nameEl = null;
        this.separatorEl = null;
        this.typeEl = null;
        this.edgeConnectorEl = null;
    }

    /**
     * Calculate space available for the label/value components
     * @param maxWidth - max available width
     */
    calculateLabelWidth(maxWidth) {
        // sanity check
        const minWidthReq = EdgeConnector.MARGIN.left + EdgeConnector.MARGIN.right + EdgeConnector.SEPARATOR_WIDTH;
        if (maxWidth < minWidthReq)
            throw `Shape.width can't be smaller than ${minWidthReq}`

        return Math.floor((maxWidth - minWidthReq) / 2) - 1;
    }

    draw(drawingContext, x, y, maxWidth) {
        this.drawingContext = drawingContext.append('g');

        const labelWidth = this.calculateLabelWidth(maxWidth);

        // name
        this.nameEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('name', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', x)
            .attr('y', y)
            .attr('dx', EdgeConnector.MARGIN.left)
            .text(this.name);
        this.nameEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

        // separator (I may need a clip path / text overflow here)
        this.separatorEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('separator', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', this.nameEl.node().getBBox().x + labelWidth)
            .attr('y', y)
            .attr('width', EdgeConnector.SEPARATOR_WIDTH)
            .text(" : ");

        // type
        this.typeEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('type', true)
            .attr('font-size', EdgeConnector.FONT_SIZE.parameters)
            .attr('x', this.separatorEl.node().getBBox().x + EdgeConnector.SEPARATOR_WIDTH)
            .attr('y', y)
            .text(this.type);
        this.typeEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

        // edge connector
        let edgeConnector;
        if (this.connectorType === ConnectorType.INPUT) {
            edgeConnector = {
                x: x - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
                y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
                class: 'input',
                width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
                height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
            }
        } else {
            edgeConnector = {
                x: x + maxWidth - (EdgeConnector.EDGE_CONNECTOR_SIZE.width / 2),
                y: y - (EdgeConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
                class: 'output',
                width: EdgeConnector.EDGE_CONNECTOR_SIZE.width,
                height: EdgeConnector.EDGE_CONNECTOR_SIZE.height,
            }
        }

        this.edgeConnectorEl = this.drawingContext
            .append('rect')
            .classed('edge_connector', true)
            .classed('connector', true)
            .classed(edgeConnector.class, true)
            .attr('transform', `rotate(-45 ${edgeConnector.x + (edgeConnector.width / 2)} ${edgeConnector.y + (edgeConnector.height / 2)})`)
            .attr('x', edgeConnector.x)
            .attr('y', edgeConnector.y)
            .attr('width', edgeConnector.width)
            .attr('height', edgeConnector.height);

        this.animateEdgeConnector();
        this.markNode(this.edgeConnectorEl);
        this.setupDragEvents();

        return this.drawingContext;
    }

    animateEdgeConnector() {
        const minWidth = 1;
        const maxWidth = 3;
        const intervalInMs = 180;
        let loops = 3;

        const expandStrokeWidth = () => {
            loops--;
            if (loops > 0) {
                this.edgeConnectorEl
                    .transition()
                    .duration(intervalInMs)
                    .attr("stroke-width", maxWidth)
                    .on('end', shrinkStrokeWidth);
            }
        };

        const shrinkStrokeWidth = () => {
            this.edgeConnectorEl
                    .transition()
                    .duration(intervalInMs)
                    .attr("stroke-width", minWidth)
                    .on('end', expandStrokeWidth);
        };

        expandStrokeWidth();
    }

    setupDragEvents() {
        this.edgeConnectorEl.call(d3.drag()
            .on('start', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, [event]))
            .on('drag', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, [event]))
            .on('end', (event) => this.triggerEvent(ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, [event])));
    }

    selectEdgeConnector(select) {
        this.drawingContext
            .select('.connector')
            .classed('selected', select);
    }

}

export class InputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.INPUT, order, name, type);
    }

}

export class OutputVertexConnector extends EdgeConnector {

    constructor(order, name, type) {
        super(ConnectorType.OUTPUT, order, name, type);
    }
}