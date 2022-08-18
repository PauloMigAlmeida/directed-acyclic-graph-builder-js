'use strict';

import {TextOverflow} from "./text-overflow.js";
import {BaseActionListener} from "../listerners/base-action-listener.js";
import {ACTION_TYPE} from "../listerners/event.js";

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
        let wrapper = drawingContext.append('g')

        const labelWidth = this.calculateLabelWidth(maxWidth);

        // name
        let nameEl = wrapper
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
        let separatorEl = wrapper
            .append('text')
            .classed('edge_connector', true)
            .classed('separator', true)
            .attr('font-size', BaseConnector.FONT_SIZE.parameters)
            .attr('x', nameEl.node().getBBox().x + labelWidth)
            .attr('y', y)
            .attr('width', BaseConnector.SEPARATOR_WIDTH)
            .text(" : ");

        // type
        let typeEl = wrapper
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

        wrapper
            .append('rect')
            .classed('edge_connector', true)
            .classed(edgeConnector.class, true)
            .attr('transform', `rotate(-45 ${edgeConnector.x + (edgeConnector.width / 2)} ${edgeConnector.y + (edgeConnector.height / 2)})`)
            .attr('x', edgeConnector.x)
            .attr('y', edgeConnector.y)
            .attr('width', edgeConnector.width)
            .attr('height', edgeConnector.height)
            .on('click', (event) => {
                let pointer = d3.pointer(event);
                this.clickListenersList
                    .filter((i) => i.type === ACTION_TYPE.EDGE_CONN_CLICK_ACTION)
                    .forEach((value) => value.invoke([pointer, this]));
            });

        return wrapper;
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