'use strict';
//TODO: Implement Drag&Drop events

let graph = new Graph('#graph');
// var graph = new GraphCreator(svg, nodes, edges);
// graph.setIdCt(2);
// graph.updateGraph();

let vertex = new Vertex(
    new MouseCoordinate(100, 100),
    new ShapeSize(200, 100),
    'Shuffle Data a b c d e f g h i j k l'
);

graph.appendVertex(vertex);