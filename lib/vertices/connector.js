'use strict';

import {TextOverflow} from "./text-overflow.js";
import {BaseActionListener} from "../events/base-action-listener.js";
import {ACTION_TYPE} from "../events/event.js";

export const ConnectorType = {
    INPUT: 1,
    OUTPUT: 2,
}

class BaseConnector extends BaseActionListener {

    static FONT_SIZE = {parameters: 12};
    static MARGIN = {left: 15, right: 15};
    static SEPARATOR_WIDTH = 10;
    static EDGE_CONNECTOR_SIZE = {width: 14, height: 14};

    constructor(connectorType, id, name, type) {
        super();
        this.connectorType = connectorType;
        this.id = id;
        this.name = name;
        this.type = type;

        this.drawingContext = null;
    }

    /**
     * Calculate space available for the label/value components
     * @param maxWidth - max available width
     */
    calculateLabelWidth(maxWidth) {
        // sanity check
        const minWidthReq = BaseConnector.MARGIN.left + BaseConnector.MARGIN.right + BaseConnector.SEPARATOR_WIDTH;
        if (maxWidth < minWidthReq)
            throw `Shape.width can't be smaller than ${minWidthReq}`

        return Math.floor((maxWidth - minWidthReq) / 2) - 1;
    }

    draw(drawingContext, x, y, maxWidth) {
        this.drawingContext = drawingContext.append('g')

        const labelWidth = this.calculateLabelWidth(maxWidth);

        // name
        let nameEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('name', true)
            .attr('font-size', BaseConnector.FONT_SIZE.parameters)
            .attr('x', x)
            .attr('y', y)
            .attr('dx', BaseConnector.MARGIN.left)
            .text(this.name);
        nameEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

        // separator (I may need a clip path / text overflow here)
        let separatorEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('separator', true)
            .attr('font-size', BaseConnector.FONT_SIZE.parameters)
            .attr('x', nameEl.node().getBBox().x + labelWidth)
            .attr('y', y)
            .attr('width', BaseConnector.SEPARATOR_WIDTH)
            .text(" : ");

        // type
        let typeEl = this.drawingContext
            .append('text')
            .classed('edge_connector', true)
            .classed('type', true)
            .attr('font-size', BaseConnector.FONT_SIZE.parameters)
            .attr('x', separatorEl.node().getBBox().x + BaseConnector.SEPARATOR_WIDTH)
            .attr('y', y)
            .text(this.type);
        typeEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

        // edge connector
        let edgeConnector;
        if (this.connectorType === ConnectorType.INPUT) {
            edgeConnector = {
                x: x - (BaseConnector.EDGE_CONNECTOR_SIZE.width / 2),
                y: y - (BaseConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
                class: 'input',
                width: BaseConnector.EDGE_CONNECTOR_SIZE.width,
                height: BaseConnector.EDGE_CONNECTOR_SIZE.height,
            }
        } else {
            edgeConnector = {
                x: x + maxWidth - (BaseConnector.EDGE_CONNECTOR_SIZE.width / 2),
                y: y - (BaseConnector.EDGE_CONNECTOR_SIZE.height / 1.5),
                class: 'output',
                width: BaseConnector.EDGE_CONNECTOR_SIZE.width,
                height: BaseConnector.EDGE_CONNECTOR_SIZE.height,
            }
        }

        let edgeConnectorEl = this.drawingContext
            .append('rect')
            .classed('edge_connector', true)
            .classed('connector', true)
            .classed(edgeConnector.class, true)
            .attr('transform', `rotate(-45 ${edgeConnector.x + (edgeConnector.width / 2)} ${edgeConnector.y + (edgeConnector.height / 2)})`)
            .attr('x', edgeConnector.x)
            .attr('y', edgeConnector.y)
            .attr('width', edgeConnector.width)
            .attr('height', edgeConnector.height);

        this.setupDragEvents(edgeConnectorEl);

        return this.drawingContext;
    }

    setupDragEvents(el) {
        el.call(d3.drag()
            .on('start', (event) => this.genericDragEventCallback(ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, event))
            .on('drag', (event) => this.genericDragEventCallback(ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, event))
            .on('end', (event) => this.genericDragEventCallback(ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, event)));
    }

    genericDragEventCallback(type, event) {
        console.log(event);
        this.listeners
            .filter((i) => i.type === type)
            .forEach((value) => value.invoke([event, this]));
    }

    selectEdgeConnector(select) {
        this.drawingContext
            .select('.connector')
            .classed('selected', select);
    }
}

export class InputVertexConnector extends BaseConnector {

    constructor(id, name, type) {
        super(ConnectorType.INPUT, id, name, type);
    }

}

export class OutputVertexConnector extends BaseConnector {

    constructor(id, name, type) {
        super(ConnectorType.OUTPUT, id, name, type);
    }
}