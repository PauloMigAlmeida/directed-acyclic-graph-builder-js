import { EdgeLine } from "./line.js";

export class Edge {
    constructor(vertexHolderA, vertexHolderB) {
        this.vertexHolderA = vertexHolderA;
        this.vertexHolderB = vertexHolderB;
        
        this.drawingContext = null;
    }

    draw(graph) {
        // group drawing context
        this.drawingContext = graph.svgMainG.append("g").classed('edge', true);
        
        this.vertexHolderA.connector.selectEdgeConnector(true);
        this.vertexHolderB.connector.selectEdgeConnector(true);

        let bboxVertA = this.vertexHolderA.connector.edgeConnectorEl.node().getBBox();
        let bboxVertB = this.vertexHolderB.connector.edgeConnectorEl.node().getBBox();


        let line = new EdgeLine(this.drawingContext);
        
        line.draw(
            // pointer1
            {
                x: bboxVertA.x + (bboxVertA.width / 2),
                y: bboxVertA.y + (bboxVertA.height / 2),
            },
            // pointer2
            {
                x: bboxVertB.x + (bboxVertB.width / 2),
                y: bboxVertB.y + (bboxVertB.height / 2),
            },
        );
    }

    remove() {
        if(this.drawingContext)
            this.drawingContext.remove();
    }
}