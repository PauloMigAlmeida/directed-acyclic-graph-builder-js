/* SPDX-License-Identifier: GPL-3.0-only */
'use strict';

import { TextOverflow } from "../misc/text-overflow";
import { ACTION_TYPE, translationMat } from "../events/event";
import { UniqueComponent } from "./unique-component";
import { ConnectorType } from "./connector";
import { VertexSerializable } from "../serialization/serialize";
import { MouseCoordinate } from "../misc/pojo";
import * as d3 from "d3";

export class Vertex extends UniqueComponent {

    static MARGIN = { top: 5, left: 5, bottom: 5, right: 5 };
    static FONT_SIZE = { title: 15, section: 14 };
    static UUID_ATTR = "vertex-uuid";
    static SELECTED_CLASS = 'selected';

    constructor(coordinate, size, title, inputs, outputs) {
        super(Vertex.UUID_ATTR);
        // sanity checks
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
        if (this.drawingContext)
            return;

        // group drawing context
        this.drawingContext = graph.svgMainG
            .append("g")
            .classed('vertex', true)
            .attr('transform', `translate(${this.coordinate.x}, ${this.coordinate.y})`);

        // rounded corner mask
        const clipPathId = crypto.randomUUID();
        let outerBoxMaskEl = this.drawingContext
            .append('clipPath')
            .attr('id', clipPathId)
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('rx', 5);

        // outer box
        let outerBoxEl = this.drawingContext
            .append('rect')
            .classed('outerbox', true)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('x', 0)
            .attr('y', 0)
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
            .attr('x', 0)
            .attr('y', 0)
            .attr("dy", Vertex.FONT_SIZE.title + Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text(this.title)
            .call(TextOverflow.calculateWordsOverflow, this.size.width - Vertex.MARGIN.left - Vertex.MARGIN.right);

        const titleElRect = this.drawingContext.select('.title').node().getBBox();

        let titleBox = this.drawingContext.select('.title-box')
            .attr('width', this.size.width)
            .attr('height', (titleElRect.height) + Vertex.MARGIN.bottom)
            .attr('x', 0)
            .attr('y', 0);

        // inputs
        let inputLabel = this.drawingContext
            .append('text')
            .classed('label', true)
            .attr('font-size', Vertex.FONT_SIZE.section)
            .attr('x', 0)
            .attr('y', titleBox.node().getBBox().height)
            .attr("dy", Vertex.FONT_SIZE.section + Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text("Inputs:")

        let next_y = inputLabel.node().getBBox().y +
            inputLabel.node().getBBox().height + Vertex.FONT_SIZE.section;

        this.inputs.forEach((value) => next_y += this.drawConnector(value, next_y));

        // outputs
        let outputLabel = this.drawingContext
            .append('text')
            .classed('label', true)
            .attr('font-size', Vertex.FONT_SIZE.section)
            .attr('x', 0)
            .attr('y', next_y)
            .attr("dy", +Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text("Output:")

        next_y = outputLabel.node().getBBox().y +
            outputLabel.node().getBBox().height +
            Vertex.FONT_SIZE.section;

        this.outputs.forEach((value) => next_y += this.drawConnector(value, next_y));

        // adjust outer box if needed
        const requiredHeight = next_y;
        if (requiredHeight > this.size.height) {
            outerBoxEl.attr('height', requiredHeight);
            outerBoxMaskEl.attr('height', requiredHeight);
        }

        // add support for moving individual vertices
        this.setupDragEvents();

        // add support for selecting invididual vertices
        this.setupClickEvents();
    }

    drawConnector(connector, next_y) {
        const eventsOfInterest = [];
        if (connector.connectorType === ConnectorType.OUTPUT) {
            // only output connectors can initiate drag events. That ensures that the DAG flows from Output -> Input   
            const eventsOfInterest = [
                ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION,
                ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION,
                ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION,
            ];             

            // pass down events of interest that might be relevant for this component
            this.listeners
                .filter((e) => eventsOfInterest.includes(e.type))
                .forEach((e) => connector.addActionListener(e.type, e.callback, e.params));
        } 

        // draw
        const wrapper = connector.draw(this.drawingContext, 0, next_y, this.size.width);

        // return vertical space consumed
        return wrapper.node().getBBox().height + Vertex.MARGIN.top;
    }

    setupDragEvents() {
        let that = this;
        // this must be added to the SVG g level so I need to tweak translate only once
        this.drawingContext.call(d3.drag()
            .subject(function () {
                var t = d3.select(this);
                let coord = translationMat(t.node());
                return {
                    x: t.attr("x") + coord.e,
                    y: t.attr("y") + coord.f
                };
            })
            .on('drag', function (event) {
                // drag / move element
                var t = d3.select(this);
                t.attr('transform', `translate(${event.x},${event.y})`);

                // tell graph to update edges
                that.triggerEvent(ACTION_TYPE.VERT_DRAGGING_ACTION, []);
            }));
    }

    setupClickEvents() {
        this.drawingContext.on('click', (event) => {
            event.stopPropagation();
            this.setSelected(!this.isSelected());
        });
    }

    setSelected(value) {
        this.drawingContext.classed(Vertex.SELECTED_CLASS, value);
    }

    isSelected() {
        return this.drawingContext.classed(Vertex.SELECTED_CLASS);
    }

    remove() {
        if (this.drawingContext) {
            this.drawingContext.remove();
        }
    }

    serialize() {
        const mat = translationMat(this.drawingContext.node());
        return new VertexSerializable(
            this._uuid,
            new MouseCoordinate(mat.e, mat.f),
            this.size,
            this.title,
            this.inputs.map((i) => i.serialize()),
            this.outputs.map((i) => i.serialize()),
        );
    }
}