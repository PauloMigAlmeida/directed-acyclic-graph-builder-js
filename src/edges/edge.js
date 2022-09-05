'use strict';

import { translationMat, EMPTY_TRANSLATION_MAT } from "../events/event.js";
import { EdgeLine } from "./line.js";
import { EdgeSerializable } from "../serialization/serialize.js";

export class Edge {
    
    static SELECTED_CLASS = 'selected';

    constructor(vertexHolderA, vertexHolderB) {
        this.vertexHolderA = vertexHolderA;
        this.vertexHolderB = vertexHolderB;

        this.drawingContext = null;
    }

    draw(graph) {
        // group drawing context
        this.drawingContext = graph.svgMainG.append("g").classed('edge', true);

        const vertexA = this.vertexHolderA.vertex;
        const vertexB = this.vertexHolderB.vertex;

        const connectorA = this.vertexHolderA.connector;
        const connectorB = this.vertexHolderB.connector;

        const translateA = translationMat(vertexA.drawingContext.node());
        const translateB = translationMat(vertexB.drawingContext.node());

        connectorA.selectEdgeConnector(true);
        connectorB.selectEdgeConnector(true);

        let bboxVertA = connectorA.edgeConnectorEl.node().getBBox();
        let bboxVertB = connectorB.edgeConnectorEl.node().getBBox();

        let line = new EdgeLine(this.drawingContext, EMPTY_TRANSLATION_MAT);

        line.draw(
            // pointer1
            {
                x: bboxVertA.x + translateA.e + (bboxVertA.width / 2),
                y: bboxVertA.y + translateA.f + (bboxVertA.height / 2),
            },
            // pointer2
            {
                x: bboxVertB.x + translateB.e + (bboxVertB.width / 2),
                y: bboxVertB.y + translateB.f + (bboxVertB.height / 2),
            },
        );

        // add support for selecting invididual edges
        this.setupClickEvents();
    }

    setupClickEvents() {
        this.drawingContext.on('click', (event) => {
            event.stopPropagation();            
            this.setSelected(!this.isSelected());
        });
    }

    setSelected(value){
        this.drawingContext.classed(Edge.SELECTED_CLASS, value);
    }

    isSelected() {
        return this.drawingContext.classed(Edge.SELECTED_CLASS);
    }

    remove() {
        if (this.drawingContext) {
            // deselect (sigh) edge connectors of vertices involved
            const connectorA = this.vertexHolderA.connector;
            const connectorB = this.vertexHolderB.connector;

            connectorA.selectEdgeConnector(false);
            connectorB.selectEdgeConnector(false);
            
            this.drawingContext.remove();
        }
    }

    serialize() {
        return new EdgeSerializable(
            this.vertexHolderA.connector._uuid,
            this.vertexHolderB.connector._uuid
        );
    }
}