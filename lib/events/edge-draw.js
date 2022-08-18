import {MouseCoordinate} from "../misc/pojo.js";
import {Graph} from "../graphs/graph.js";

export class EdgeDrawEvent {

    constructor(drawingContext) {
        this.drawingContext = drawingContext;
        this.started = false;
        this.vertexA = null;
        this.vertexB = null;

        this.line = null;
        this.dragStart2DCoord = null;
    }

    dragStartEventHandler(pointer, vertex, edgeConnector){
        this.started = true;
        this.vertexA = vertex;
        edgeConnector.selectEdgeConnector(true);

        this.line = this.drawingContext.select(`.${Graph.MAIN_G_CLASS}`)
            .append('svg:path')
            .attr('class', 'link')
            .style('marker-end', 'url(#mark-end-arrow)');
        this.dragStart2DCoord = pointer;
    }

    draggingEventHandler(pointer) {
        this.line.attr('d', `M ${this.dragStart2DCoord.x},${this.dragStart2DCoord.y} L ${pointer.x},${pointer.y}`);
    }

    dragEndEventHandler(pointer, vertex, edgeConnector){
        this.vertexB = vertex;
        edgeConnector.selectEdgeConnector(false);

        //TODO finish drawing path
        //TODO delete this.line from SVG
        //TODO validate cycle
        //TODO check if vertex A and B aren't the same (drag triggers click for some reason)
        //TODO add edge to list of edges on the Graph instance

        this.started = false;
        this.vertexA = null;
        this.vertexB = null;
        this.line.remove();
    }
}