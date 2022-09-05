'use strict';

import { ACTION_TYPE } from "../events/event.js";
import { EdgeDrawEvent } from "../events/edge-draw-listener.js";
import { VertexContainer } from "../datastructures/vertex-container.js";
import { EdgeConnector } from "../vertices/connector.js";
import { Edge } from "../edges/edge.js";
import { EdgeContainer } from "../datastructures/edge-container.js";
import { GraphSerializable, VertexSerializable, EdgeSerializable } from "../serialization/serialize.js";
import * as d3 from "d3";


export class Graph {
    static MAIN_G_CLASS = 'graph';

    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.svg = null
        this.svgMainG = null
        this.edgeDrawListener = null;
        this.vertices = new VertexContainer();
        this.edges = new EdgeContainer();
        this.init();
    }

    init() {
        // validate SVG holder
        if (document.querySelector(this.containerSelector) === null) throw "Container Selector isn't valid";

        this.svg = d3.select(this.containerSelector).append("svg");
        this.svgMainG = this.svg.append("g").classed(Graph.MAIN_G_CLASS, true);

        this.edgeDrawListener = new EdgeDrawEvent(this);
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

        // remove selection of all vertices and edges when user clicks in the svg parent
        this.svg.on('click', (event) => {
            event.stopPropagation();

            this.vertices.iterate((v) => v.setSelected(false));
            this.edges.iterate((v) => v.setSelected(false));
        });

        // delete vertices/edges components
        d3.select(window).on("keydown", (event) => {
            if ([46 /* delete */, 8 /* backspace */].includes(event.keyCode)) {
                // delete dependent edges on doomed vertices
                this.vertices
                    .findAllSelected()
                    .forEach((i) => this.edges.removeEdgesByVertex(i));

                // delete selected elements
                this.vertices.removeSelected();
                this.edges.removeSelected();
            }
        });
    }

    appendVertex(vertex) {
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        vertex.addActionListener(ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION, this.edgeConnectorGenericDragHandler, [this]);
        vertex.addActionListener(ACTION_TYPE.VERT_DRAGGING_ACTION, this.vertexDragHandler, [this]);

        this.vertices.append(vertex);
    }

    appendEdge(edge){
        //TODO add validations in case this comes from import method...
        if (this.edges.append(edge)) {
            this.update();
        }
    }

    update() {
        let that = this;
        this.vertices.iterate(function (value) {
            value.draw(that);
        });
        this.edges.iterate(function (value) {
            value.remove();
            value.draw(that);
        });
    }

    translateCoordinates(event) {
        return d3.pointer(event, this.svgMainG.node());
    }

    export() {
        let vertices = [];
        this.vertices.iterate((value) => {
            vertices.push(value.serialize());
        });

        let edges = [];
        this.edges.iterate((value) => {
            edges.push(value.serialize());
        });

        return new GraphSerializable(
            vertices,
            edges,
        );
    }

    import(graphSerializable) {
        this.clear();

        graphSerializable.vertices.forEach((value) => {
            const vertexSer = Object.assign(new VertexSerializable, value);
            const vertex = vertexSer.deserialize();
            this.appendVertex(vertex);
        });

        graphSerializable.edges.forEach((value) => {
            const edgeSer = Object.assign(new EdgeSerializable, value);
            this.appendEdge(new Edge(
                this.vertices.findVertexConnectorByUUID(edgeSer.from_connector),
                this.vertices.findVertexConnectorByUUID(edgeSer.to_connector),
            ));
        });

        this.update();
    }

    clear() {
        this.edges.removeAll();
        this.vertices.removeAll();
    }

    /* callbacks for events */

    edgeConnectorGenericDragHandler(type, that, event) {
        let vertex = null;
        let connector = null;
        let uuid = null;
        let targetEl = d3.select(event.sourceEvent.path[0]);

        //check if that's not a line
        let updateLineOnly = false;

        if (targetEl.classed("link")) {
            updateLineOnly = true;
        } else {
            uuid = targetEl.attr(EdgeConnector.UUID_ATTR) || null;

            if (uuid) {
                let holder = that.vertices.findVertexConnectorByUUID(uuid);
                vertex = holder.vertex;
                connector = holder.connector;
            }
        }

        if (type === ACTION_TYPE.EDGE_CONN_DRAG_START_ACTION)
            that.edgeDrawListener.dragStartEventHandler(event, vertex, connector);
        else if (type === ACTION_TYPE.EDGE_CONN_DRAGGING_ACTION)
            that.edgeDrawListener.draggingEventHandler(event, vertex, connector, updateLineOnly);
        else if (type === ACTION_TYPE.EDGE_CONN_DRAG_END_ACTION)
            that.edgeDrawListener.dragEndEventHandler(event);
    }

    edgeConnectorIsAdded(vertexHolderA, vertexHolderB) {        
        this.appendEdge(new Edge(vertexHolderA, vertexHolderB));
    }

    vertexDragHandler(type, that) {
        if (type === ACTION_TYPE.VERT_DRAGGING_ACTION)
            that.update();
    }
}