import {TextOverflow} from "./text-overflow.js";

export class Vertex {

    static MARGIN = {top: 5, left: 5, bottom: 5, right: 5};
    static FONT_SIZE = {title: 15, section: 14};

    constructor(coordinate, size, title, inputs, outputs) {
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
            this.drawingContext = graph.svgMainG.append("g");

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
                .attr('font-size', Vertex.FONT_SIZE.title)
                .attr('font-weight', 'bold')
                .attr('fill', 'white')
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
                .attr('y', this.coordinate.y)
                .attr('fill', 'blue');

            // inputs
            let inputLabel = this.drawingContext
                .append('text')
                .attr('font-size', Vertex.FONT_SIZE.section)
                .attr('font-weight', 'bold')
                .attr('x', titleBox.attr('x'))
                .attr('y', titleBox.node().getBBox().y + titleBox.node().getBBox().height)
                .attr("dy", Vertex.FONT_SIZE.section + Vertex.MARGIN.top)
                .attr("dx", Vertex.MARGIN.left)
                .text("Inputs:")

            let next_y = inputLabel.node().getBBox().y +
                            inputLabel.node().getBBox().height +
                            Vertex.FONT_SIZE.section;

            this.inputs.forEach((value) => {
                let wrapper = value.draw(this.drawingContext, this.coordinate.x, next_y, this.size.width);
                next_y += wrapper.node().getBBox().height + Vertex.MARGIN.top;
            });

            // outputs
            let outputLabel = this.drawingContext
                .append('text')
                .attr('font-size', Vertex.FONT_SIZE.section)
                .attr('font-weight', 'bold')
                .attr('x', this.coordinate.x)
                .attr('y', next_y)
                .attr("dy", + Vertex.MARGIN.top )
                .attr("dx", Vertex.MARGIN.left)
                .text("Output:")

            next_y = outputLabel.node().getBBox().y +
                outputLabel.node().getBBox().height +
                Vertex.FONT_SIZE.section;

            this.outputs.forEach((value) => {
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
}