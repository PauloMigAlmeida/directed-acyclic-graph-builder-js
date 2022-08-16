export class Vertex {

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
        if (this.drawingContext === null) {
            // group drawing context
            this.drawingContext = graph.svgMainG.append("g");

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