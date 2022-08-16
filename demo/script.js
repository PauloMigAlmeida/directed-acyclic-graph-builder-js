'use strict';

import {Graph, Vertex, MouseCoordinate, ShapeSize} from "./node_modules/dag-js/lib/dag.js";

//TODO: Implement Drag&Drop events

let graph = new Graph('#graph');

graph.appendVertex(new Vertex(
    new MouseCoordinate(100, 100),
    new ShapeSize(200, 100),
    'Shuffle Data a b c d e f g h i j k l'
));

graph.update();

graph.appendVertex(new Vertex(
    new MouseCoordinate(300, 300),
    new ShapeSize(200, 100),
    'Shuffle Data a b c d e f g h i j k l'
));

graph.update();