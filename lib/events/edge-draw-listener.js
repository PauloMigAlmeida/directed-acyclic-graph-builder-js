import {Graph} from "../graphs/graph.js";
import {VertexConnectorHolder} from "../datastructures/vertex-container.js";
import {BaseActionListener} from "./base-action-listener.js";
import { EdgeLine, EdgeLineState } from "../edges/line.js";

export class EdgeDrawEvent extends BaseActionListener{

    constructor(drawingContext) {
        super();
        this.drawingContext = drawingContext;
        this.started = false;
        this.vertexHolderA = null;
        this.vertexHolderB = null;

        this.line = null;
        this.dragStart2DCoord = null;
    }

    dragStartEventHandler(pointer, vertex, edgeConnector){
        this.started = true;
        this.vertexHolderA = new VertexConnectorHolder(vertex, edgeConnector);
        edgeConnector.selectEdgeConnector(true);

        this.line = new EdgeLine(this.drawingContext);
        this.dragStart2DCoord = pointer;
    }

    draggingEventHandler(pointer, vertex, edgeConnector, updateLineOnly) {
        this.line.draw(this.dragStart2DCoord, pointer);
        /*
            due to SVG rendering order, sometimes the mouse point will think it's above the arrow
            rather than over the edge connector spot. We still have to update the line coordinates
            otherwise the UI looks sluggish
         */
        if(updateLineOnly) 
            return;        

        // adapt UI to guide user to the right edge connector drop spot
        if(!vertex && !edgeConnector){
            // change arrow back to normal if pointer isn't hovering an actual drop spot
            this.line.changeStatus(EdgeLineState.DEFAULT);
            this.vertexHolderB = null;
        }else if(this.validateDroppableTarget(this.vertexHolderA, new VertexConnectorHolder(vertex, edgeConnector))){
            this.line.changeStatus(EdgeLineState.FORBID);
            this.vertexHolderB = null;
        }else {
            this.line.changeStatus(EdgeLineState.ALLOW);
            this.vertexHolderB = new VertexConnectorHolder(vertex, edgeConnector);
        }

        
    }

    dragEndEventHandler(pointer){
        console.log(this.vertexHolderB);
        /*
            User dropped it outside of the draggable are which is equivalent to cancel the operation OR
            User has infringed any of the DAG rules
         */
        if(!this.vertexHolderB || this.validateDroppableTarget(this.vertexHolderA, this.vertexHolderB)){
            console.log("Cancelling");
            this.cleanUp();
            return;
        }

        console.log('Accepting the crap out of that');
        this.vertexHolderB.connector.selectEdgeConnector(true);

        //TODO finish drawing path
        //TODO delete this.line from SVG
        //TODO add edge to list of edges on the Graph instance

        this.cleanUp();
    }

    /**
     * Validate possible connection against the DAG cardinal sins =)
     * @param holderA - Vertex Holder
     * @param holderB - Vertex Holder
     * @returns {boolean} true if that connection infringes any rule, false otherwise.
     */
    validateDroppableTarget(holderA, holderB){
        let infringeRule = false;

        // input edge connectors can only bind to output ones (and vice versa)
        if (holderA.connector.connectorType === holderB.connector.connectorType)
            infringeRule = true;
        // you can't connect input <-> output if they are in the same vertex (for obvious reasons)
        else if(holderA.vertex._uuid === holderB.vertex._uuid)
            infringeRule = true;
        //TODO validate cycle

        return infringeRule;
    }

    cleanUp(){
        if(this.vertexHolderA?.connector)
            this.vertexHolderA.connector.selectEdgeConnector(false);
        if(this.vertexHolderB?.connector)
            this.vertexHolderB.connector.selectEdgeConnector(false);

        this.started = false;
        this.vertexHolderA = null;
        this.vertexHolderB = null;
        this.line.cleanUp();
    }
}