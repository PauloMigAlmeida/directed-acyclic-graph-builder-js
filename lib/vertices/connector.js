'use strict';

import {TextOverflow} from "./text-overflow.js";

export const ConnectorType  = {
    INPUT: 1,
    OUTPUT: 2,
}

class BaseConnector extends TextOverflow{
    static FONT_SIZE = {parameters: 12};
    static MARGIN = {left: 10, right: 10};
    static SEPARATOR_WIDTH = 10;

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
    calculateLabelWidth(maxWidth){
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
            .attr('font-size',BaseConnector.FONT_SIZE.parameters)
            .attr('x',x)
            .attr('y',y)
            .attr('fill', 'blue')
            .attr('dx', BaseConnector.MARGIN.left)
            .text(this.name);
        nameEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

        // separator (I may need a clip path / text overflow here)
        let separatorEl = wrapper
            .append('text')
            .attr('font-size',BaseConnector.FONT_SIZE.parameters)
            .attr('x',nameEl.node().getBBox().x + labelWidth)
            .attr('y',y)
            .attr('width', BaseConnector.SEPARATOR_WIDTH)
            .text(" : ");

        // type
        let typeEl = wrapper
            .append('text')
            .attr('font-size',BaseConnector.FONT_SIZE.parameters)
            .attr('x',separatorEl.node().getBBox().x + BaseConnector.SEPARATOR_WIDTH)
            .attr('y',y)
            .attr('fill', 'green')
            .text(this.type);
        typeEl.call(TextOverflow.calculateCharsOverflow, labelWidth);

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