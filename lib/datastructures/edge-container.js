export class EdgeContainer {
    constructor() {
        this.edges = [];
    }

    append(edge){
        this.edges.push(edge);
    }

    iterate(callback) {
        this.edges.forEach((value) => callback(value));
    }
}