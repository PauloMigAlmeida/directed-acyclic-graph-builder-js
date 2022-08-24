'use strict';

import {
    Graph,
    Vertex,
    MouseCoordinate,
    ShapeSize,
    InputVertexConnector,
    OutputVertexConnector
} from "./node_modules/dag-js/lib/dag.js";

//TODO: Implement Drag&Drop events

let graph = new Graph('#graph');

graph.appendVertex(new Vertex(
    new MouseCoordinate(100, 100),
    new ShapeSize(200, 100),
    'Shuffle Data',
    [
        new InputVertexConnector(0, 'data_in', "List[List[List[float]]]"),
        new InputVertexConnector(1, 'seed_asda_asdas', 'int'),
    ],
    [
        new OutputVertexConnector(0, 'data', 'List[float]'),
    ],
));

graph.update();

graph.appendVertex(new Vertex(
    new MouseCoordinate(300, 300),
    new ShapeSize(200, 150),
    'Shuffle Data a b c d e f g h i j k l',
    [
        new InputVertexConnector(0, 'data', "List[float]"),
        new InputVertexConnector(1, 'seed', 'int'),
    ],
    [
        new OutputVertexConnector(0, 'data', 'List[float]'),
    ],
));

graph.update();

graph.appendVertex(new Vertex(
    new MouseCoordinate(550, 100),
    new ShapeSize(200, 150),
    'Random data',
    [
        new InputVertexConnector(0, 'data', "List[float]"),
    ],
    [
        new OutputVertexConnector(0, 'data', 'List[float]'),
    ],
));

graph.update();

const catalog = [
    {
        title: 'oi',
        inputs: [
            {order: 0, name: 'name', type: 'str'}
        ],
        outputs: [
            {order: 0, name: 'name', type: 'str'}
        ],
    }
];


/* Drag and Drop events */
const graphEl = document.getElementById('graph');

document.addEventListener('dragstart', (event) => {    
    console.log('graphEl.addEventListener', event);
    event.dataTransfer.setData("text/plain", 0);
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
});

graphEl.addEventListener('drop', (event) => {
    event.preventDefault();

    // Get the id of the target and add the moved element to the target's DOM
    const data = event.dataTransfer.getData("text/plain");
    const item = catalog[parseInt(data)];
    console.log(data, parseInt(data), item);
    // event.target.appendChild(document.getElementById(data));
});