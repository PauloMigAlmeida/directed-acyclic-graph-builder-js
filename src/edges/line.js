'use strict';

export const EdgeLineState = {
    DEFAULT:    1,
    ALLOW:      2,
    FORBID:     3,
};

export class EdgeLine {
    constructor(drawingContext, translationMatrix){
        this.drawingContext = drawingContext;    
        this.translationMatrix = translationMatrix;    
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
        this.lineEl.attr('transform', `translate(${this.translationMatrix.e},${this.translationMatrix.f})`);
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