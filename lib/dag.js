"use strict";

class MouseCoordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ShapeSize {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }
}

class Vertex {

    static MARGIN = {top: 5, left: 5, bottom: 5, right: 5};
    static FONT_SIZE = 16;

    constructor(coordinate, size, title) {
        // sanity checks
        if (coordinate.x < 0 || coordinate.y < 0) throw "Coordinates (x,y) can't be negative";

        if (size.width < (Vertex.MARGIN.left + Vertex.MARGIN.right)) throw "Size can't be smaller than default padding values";

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
        // group context
        if (this.drawingContext === null) {
            this.drawingContext = graph.svgMainG.append("g");
        }

        // rounded corner mask
        const clipPathId = crypto.randomUUID();
        this.drawingContext
            .append('clipPath')
            .attr('id', clipPathId)
            .append('rect')
            .attr('x', this.coordinate.x)
            .attr('y', this.coordinate.y)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('rx', 5);

        // box
        this.drawingContext
            .append('rect')
            .classed('vertex', true)
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .attr('fill', '#FFF')
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
            .attr('font-size', Vertex.FONT_SIZE)
            .attr('font-weight', 'bold')
            .attr('x', this.coordinate.x)
            .attr('y', this.coordinate.y)
            .attr("dy", Vertex.FONT_SIZE + Vertex.MARGIN.top)
            .attr("dx", Vertex.MARGIN.left)
            .text(this.title)
            .call(this.calculateTextOverflow, this.size.width - Vertex.MARGIN.left - Vertex.MARGIN.right);

        const titleEl = this.drawingContext.select('.title').node();

        this.drawingContext.select('.title-box')
            .attr('width', this.size.width)
            .attr('height', (titleEl.getBoundingClientRect().y + titleEl.getBoundingClientRect().height - this.coordinate.y) + Vertex.MARGIN.bottom)
            .attr('x', this.coordinate.x)
            .attr('y', this.coordinate.y)
            .attr('fill', 'blue');
    }

    /**
     * Trim text's content if that overflows the desired width
     * @param text - reference to d3.js SVG element
     * @param width - max width that the text can be before overflow
     */
    calculateTextOverflow(text, width) {
        const originalText = text.text();

        // calculate ellipsis size
        const ellipsis = '...';
        text.text(ellipsis);
        const ellipsisWidth = text.node().getComputedTextLength();
        width -= ellipsisWidth;

        // try best fit
        let words = originalText.split(/\s+/).reverse();
        let curr;
        let list = [];
        while (curr = words.pop()) {
            list.push(curr);
            let attempt = list.join(" ");
            attempt.substring(0, attempt.length - 1);

            text.text(attempt);
            if (text.node().getComputedTextLength() > width) {
                list.pop();
                list.push(ellipsis);

                attempt = list.join(" ");
                attempt.substring(0, attempt.length - 1);
                text.text(attempt);
                break;
            }
        }
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
        if (document.querySelector(this.containerSelector) === null) throw "Container Selector isn't valid";

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

    zoom() {
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
            .on("zoom", function () {
                if (d3.event.sourceEvent.shiftKey) {
                    return false;
                }
                that.zoom();
                return true;
            })
            .on("zoomstart", function () {
                if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
            })
            .on("zoomend", function () {
                d3.select('body').style("cursor", "auto");
            });
        this.svg.call(zoomCallback).on("dblclick.zoom", null);
    }

    appendVertex(vertex) {
        this.vertices.push(vertex);
        vertex.draw(this);
    }

    update() {
        //TODO recalculate
    }

}