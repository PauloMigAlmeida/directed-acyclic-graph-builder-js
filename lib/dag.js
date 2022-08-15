"use strict";

class Vertex {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Graph {
    static MAIN_G_CLASS = 'graph';

    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.svg = null
        this.svgMainG = null
        this.vertices = []

        this.init();
    }

    init() {
        // validate SVG holder
        if (document.querySelector(this.containerSelector) === null)
            throw "Container Selector isn't valid";

        this.svg = d3.select(this.containerSelector).append("svg");
        this.svgMainG = this.svg.append("g").classed(Graph.MAIN_G_CLASS, true);

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

    zoom(){
        this.svgMainG.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
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
        let that = this;
        let zoomCallback = d3.behavior.zoom()
            .on("zoom", function(){
                if (d3.event.sourceEvent.shiftKey){
                    return false;
                }
                that.zoom();
                return true;
            })
            .on("zoomstart", function(){
                if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
            })
            .on("zoomend", function(){
                d3.select('body').style("cursor", "auto");
            });
        this.svg.call(zoomCallback).on("dblclick.zoom", null);
    }

    appendVertex(vertex) {
        this.vertices.append(vertex);
    }

    update() {
        //TODO recalculate
    }

}