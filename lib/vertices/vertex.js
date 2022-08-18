'use strict';

import {TextOverflow} from "./text-overflow.js";
import {BaseActionListener} from "../listerners/base-action-listener.js";
import {ACTION_TYPE} from "../listerners/event.js";

export class Vertex extends BaseActionListener {

    static MARGIN = {top: 5, left: 5, bottom: 5, right: 5};
    static FONT_SIZE = {title: 15, section: 14};

    constructor(coordinate, size, title, inputs, outputs) {
        super();
        // sanity checks
        if (coordinate.x < 0 || coordinate.y < 0)
            throw "Coordinates (x,y) can't be negative";

        if (size.width < (Vertex.MARGIN.left + Vertex.MARGIN.right))
            throw "Size can't be smaller than default padding values";

        if(inputs === null || inputs === undefined)
            inputs = [];

        if(outputs === null || outputs === undefined)
            outputs = [];

        if(inputs.length === 0 && outputs.length === 0)
            throw "Either inputs or outputs can be empty but not both";

        this.inputs = inputs;
        this.outputs = outputs;

        this.coordinate = coordinate;
        this.size = size;
        this.title = title;
        this.drawingContext = null;
    }

    /**
     * Draw the Edge into the Graph
     * @param graph - graph instance in which this edge will be drawn
     */
    draw(graph) {
        if (this.drawingContext === null) {
            // group drawing context
            this.drawingContext = graph.svgMainG.append("g")
                .classed('vertex', true);

            // rounded corner mask
            const clipPathId = crypto.randomUUID();
            let outerBoxMaskEl = this.drawingContext
                .append('clipPath')
                .attr('id', clipPathId)
                .append('rect')
                .attr('x', this.coordinate.x)
                .attr('y', this.coordinate.y)
                .attr('width', this.size.width)
                .attr('height', this.size.height)
                .attr('rx', 5);

            // outer box
            let outerBoxEl = this.drawingContext
                .append('rect')
                .attr('width', this.size.width)
                .attr('height', this.size.height)
                .attr('x', this.coordinate.x)
                .attr('y', this.coordinate.y)
                .attr('clip-path', 'url(#' + clipPathId + ')');

            // title
            this.drawingContext
                .append('rect')
                .classed('title-box', true)
                .attr('clip-path', 'url(#' + clipPathId + ')');

            this.drawingContext
                .append('text')
                .classed('title', true)
                .attr('font-size', Vertex.FONT_SIZE.title)
                .attr('x', this.coordinate.x)
                .attr('y', this.coordinate.y)
                .attr("dy", Vertex.FONT_SIZE.title + Vertex.MARGIN.top)
                .attr("dx", Vertex.MARGIN.left)
                .text(this.title)
                .call(TextOverflow.calculateWordsOverflow, this.size.width - Vertex.MARGIN.left - Vertex.MARGIN.right);

            const titleElRect = this.drawingContext.select('.title').node().getBBox();

            let titleBox = this.drawingContext.select('.title-box')
                .attr('width', this.size.width)
                .attr('height', (titleElRect.y + titleElRect.height - this.coordinate.y) + Vertex.MARGIN.bottom)
                .attr('x', this.coordinate.x)
                .attr('y', this.coordinate.y);

            // inputs
            let inputLabel = this.drawingContext
                .append('text')
                .classed('label', true)
                .attr('font-size', Vertex.FONT_SIZE.section)
                .attr('x', titleBox.attr('x'))
                .attr('y', titleBox.node().getBBox().y + titleBox.node().getBBox().height)
                .attr("dy", Vertex.FONT_SIZE.section + Vertex.MARGIN.top)
                .attr("dx", Vertex.MARGIN.left)
                .text("Inputs:")

            let next_y = inputLabel.node().getBBox().y +
                            inputLabel.node().getBBox().height +
                            Vertex.FONT_SIZE.section;

            this.inputs.forEach((value) => {
                value.addActionListener(ACTION_TYPE.EDGE_CONN_CLICK_ACTION, this.edgeConnectorClickCallback, [this]);
                let wrapper = value.draw(this.drawingContext, this.coordinate.x, next_y, this.size.width);
                next_y += wrapper.node().getBBox().height + Vertex.MARGIN.top;
            });

            // outputs
            let outputLabel = this.drawingContext
                .append('text')
                .classed('label', true)
                .attr('font-size', Vertex.FONT_SIZE.section)
                .attr('x', this.coordinate.x)
                .attr('y', next_y)
                .attr("dy", + Vertex.MARGIN.top )
                .attr("dx", Vertex.MARGIN.left)
                .text("Output:")

            next_y = outputLabel.node().getBBox().y +
                outputLabel.node().getBBox().height +
                Vertex.FONT_SIZE.section;

            this.outputs.forEach((value) => {
                value.addActionListener(ACTION_TYPE.EDGE_CONN_CLICK_ACTION, this.edgeConnectorClickCallback, [this]);
                let wrapper = value.draw(this.drawingContext, this.coordinate.x, next_y, this.size.width);
                next_y += wrapper.node().getBBox().height + Vertex.MARGIN.top;
            });

            // adjust outer box if needed
            const requiredHeight = next_y - this.coordinate.y;
            if (requiredHeight > this.size.height) {
                console.log(`Shape.height (${this.size.height}) isn't sufficient ` +
                            `to hold all elements... increasing outer layer to (${requiredHeight})`);
                outerBoxEl.attr('height', requiredHeight);
                outerBoxMaskEl.attr('height', requiredHeight);
            }
        }
    }

    /**
     * Handler for the edge connector click event
     * @param that - reference to the callback function's owner
     * @param pointer - Returns a two-element array of numbers [x, y] representing the coordinates of the specified
     *                  event relative to the specified target. event can be a MouseEvent, a PointerEvent, a Touch,
     *                  or a custom event holding a UIEvent as event.sourceEvent.
     * @param edgeConnector - edge connector instance that was clicked on
     */
    edgeConnectorClickCallback(that, pointer, edgeConnector){
        that.clickListenersList
            .filter((i) => i.type === ACTION_TYPE.EDGE_CONN_CLICK_ACTION)
            .forEach((value) => value.invoke([pointer, that, edgeConnector]));
    }
}