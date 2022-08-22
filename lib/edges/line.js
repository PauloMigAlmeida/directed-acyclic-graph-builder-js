import { Graph } from "../dag.js";

export const EdgeLineState = {
    DEFAULT:    1,
    ALLOW:      2,
    FORBID:     3,
};

export class EdgeLine {
    constructor(drawingContext){
        this.drawingContext = drawingContext;        
        this.lineEl = null;
        this.setup();
    }

    setup(){
        this.lineEl = this.drawingContext
            .append('svg:path')
            .attr('class', 'link')
            .style('marker-end', 'url(#mark-end-arrow)');
    }

    draw(pointer1, pointer2){
        this.lineEl.attr('d', `M ${pointer1.x},${pointer1.y} L ${pointer2.x},${pointer2.y}`);
    }

    changeStatus(status){
        switch(status){
            case EdgeLineState.ALLOW:
                this.lineEl.classed("bad", false);
                this.lineEl.classed("good", true);
                break;
            case EdgeLineState.FORBID:
                this.lineEl.classed("bad", true);
                this.lineEl.classed("good", false);
                break;
            default:
                this.lineEl.classed("bad", false);
                this.lineEl.classed("good", false);
        }
    }

    cleanUp(){
        this.lineEl.remove();
    }


}