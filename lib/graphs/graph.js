'use strict';

import {ACTION_TYPE} from "../events/event.js";
import {EdgeDrawEvent} from "../events/edge-draw.js";
import {VertexContainer} from "../datastructures/vertex-container.js";
import {EdgeConnector} from "../vertices/connector.js";

export class Graph {
    static MAIN_G_CLASS = 'graph';

    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.svg = null
        this.svgMainG = null
        this.edgeDrawListener = null;
        this.vertices = new VertexContainer()
        this.init();
    }

    init() {
        // validate SVG holder
        if (document.querySelector(this.containerSelector) === null) throw "Container Selector isn't valid";

        this.svg = d3.select(this.containerSelector).append("svg");
        this.svgMainG = this.svg.append("g").classed(Graph.MAIN_G_CLASS, true);

        this.edgeDrawListener = new EdgeDrawEvent(this.svg);
        this.resize();
        this.addSymbolicDefs();
        this.addListenerDefaults();
    }

    /**
     * Set SVG to container's dimensions
     */
    resize() {
        let el = document.querySelector(this.containerSelector);
        this.svg
            .attr("width", el.clientWidth)
            .attr("height", el.clientHeight);
    }

    zoom(event) {
        this.svgMainG.attr('transform', event.transform);
        return true;
    }

    /**
     * SVG defs can be referenced by name across the elements
     */
    addSymbolicDefs() {
        // define arrow markers for graph links
        let defs = this.svg.append('svg:defs');
        defs.append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', "32")
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');

        // define arrow markers for leading arrow
        defs.append('svg:marker')
            .attr('id', 'mark-end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 7)
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
    }

    /**
     * Add listeners to events that graph should handle by default
     */
    addListenerDefaults() {
        // add listener handler for resize events
        window.onresize = () => {
            this.resize();
        };

        // Zoom listener
        let zoomCallback = d3.zoom()
            .scaleExtent([0.3, 2])
            .on("zoom", (event) => this.zoom(event))
            .on("start", function () {
                d3.select('body').style("cursor", "move");
            })
            .on("end", function () {
                d3.select('body').style("cursor", "auto");
            });
        this.svg.call(zoomCallback).on("dblclick.zoom", null);
    }

    appendVertex(vertex) {
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        this.vertices.append(vertex);
    }

    update() {
        let that = this;
        this.vertices.iterate(function (value) {
            value.draw(that);
        });
    }

    edgeConnectorGenericDragHandler(type, that, event) {
        let vertex = null;
        let connector = null;
        let uuid = null;
        let targetEl = d3.select(event.sourceEvent.path[0]);

        //check if that's not a line
        let updateLineOnly = false;

        if (targetEl.classed("link")) {
            updateLineOnly = true;
        }else {
            uuid = targetEl.attr(EdgeConnector.UUID_ATTR) || null;

            if (uuid){
                let holder = that.vertices.findVertexConnectorByUUID(uuid);
                vertex = holder.vertex;
                connector = holder.connector;
            }
        }

        if (type === ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION)
            that.edgeDrawListener.dragStartEventHandler(event, vertex, connector);
        else if(type === ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION)
            that.edgeDrawListener.draggingEventHandler(event, vertex, connector, updateLineOnly);
        else if (type === ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION)
            //TODO Fix on Monday. The event.sourceEvent.path[0] strategy didn't work as sometimes it returns null
            // when dropping the element... you'll have to implement the x,y approach (or other)
            that.edgeDrawListener.dragEndEventHandler(event, vertex, connector);
    }
}