'use strict';

import {TextOverflow} from "../misc/text-overflow.js";
import {ACTION_TYPE} from "../events/event.js";
import {UniqueComponent} from "./unique-component.js";

export class Vertex extends UniqueComponent {

    static MARGIN = {top: 5, left: 5, bottom: 5, right: 5};
    static FONT_SIZE = {title: 15, section: 14};
    static UUID_ATTR = "vertex-uuid";

    constructor(coordinate, size, title, inputs, outputs) {
        super(Vertex.UUID_ATTR);
        // sanity checks
        if (coordinate.x < 0 || coordinate.y < 0)
            throw "Coordinates (x,y) can't be negative";

        if (size.width < (Vertex.MARGIN.left + Vertex.MARGIN.right))
            throw "Size can't be smaller than default padding values";

        if (inputs === null || inputs === undefined)
            inputs = [];

        if (outputs === null || outputs === undefined)
            outputs = [];

        if (inputs.length === 0 && outputs.length === 0)
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

            this.inputs.forEach((value) => next_y += this.drawConnector(value, next_y));

            // outputs
            let outputLabel = this.drawingContext
                .append('text')
                .classed('label', true)
                .attr('font-size', Vertex.FONT_SIZE.section)
                .attr('x', this.coordinate.x)
                .attr('y', next_y)
                .attr("dy", +Vertex.MARGIN.top)
                .attr("dx", Vertex.MARGIN.left)
                .text("Output:")

            next_y = outputLabel.node().getBBox().y +
                outputLabel.node().getBBox().height +
                Vertex.FONT_SIZE.section;

            this.outputs.forEach((value) => next_y += this.drawConnector(value, next_y));

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

    drawConnector(connector, next_y) {
        // pass down events of interest that might be relevant for this component
        const eventsOfInterest = [
            ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION,
            ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION,
            ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION];

        this.listeners
            .filter((e) => eventsOfInterest.includes(e.type))
            .forEach((e) => connector.addActionListener(e.type, e.callback, e.params));

        // draw
        const wrapper = connector.draw(this.drawingContext, this.coordinate.x, next_y, this.size.width);

        // return vertical space consumed
        return wrapper.node().getBBox().height + Vertex.MARGIN.top;
    }

}