'use strict';

import {
    Graph,
    Vertex,
    MouseCoordinate,
    ShapeSize,
    InputVertexConnector,
    OutputVertexConnector,
} from "./dag.js";

const catalog = [
    {
        title: 'Dataset Reader',
        inputs: [
            { order: 0, name: 'path', type: 'str' },
        ],
        outputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Split Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'train_dataset', type: 'List[List[float]]' },
            { order: 1, name: 'test_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Shuffle Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'shuffled_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'Normalise Dataset',
        inputs: [
            { order: 0, name: 'dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'norm_dataset', type: 'List[List[float]]' },
        ],
    },
    {
        title: 'ResNet CNN Model',
        inputs: [
            { order: 0, name: 'layers', type: 'List[Layers]' },
        ],
        outputs: [
            { order: 0, name: 'model', type: 'Model' },
        ],
    },
    {
        title: 'Train',
        inputs: [
            { order: 0, name: 'model', type: 'Model' },
            { order: 1, name: 'train_dataset', type: 'List[List[float]]' },
            { order: 2, name: 'test_dataset', type: 'List[List[float]]' },
        ],
        outputs: [
            { order: 0, name: 'results', type: 'List[List[float]]' },
        ],
    },
];

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

/* Drag and Drop events */
const graphEl = document.getElementById('graph');

document.addEventListener('dragstart', (event) => {
    const catalogId = event.target.getAttribute('catalog-id');
    event.dataTransfer.setData("text/plain", catalogId);
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
});

graphEl.addEventListener('drop', (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");
    const item = catalog[parseInt(data)];

    let pointer = graph.translateCoordinates(event);
    let shape = new ShapeSize(200, 150);

    graph.appendVertex(new Vertex(
        new MouseCoordinate(pointer[0] - shape.width / 2, pointer[1]),
        shape,
        item.title,
        item.inputs.map((i) => new InputVertexConnector(i.order, i.name, i.type)),
        item.outputs.map((i) => new OutputVertexConnector(i.order, i.name, i.type)),
    ));

    graph.update();

});

/* Toolbox actions */
document.getElementById('upload-input').addEventListener('click', () => {
    graph.import();
});

document.getElementById('download-input').addEventListener('click', () => {
    const output = graph.export();   
    const blob = new Blob([JSON.stringify(output)], {type: "text/plain;charset=utf-8"});
    window.saveAs(blob, "dag.json");    
});

document.getElementById('delete-graph').addEventListener('click', () => {
    graph.clear();
});