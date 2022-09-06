'use strict';

import {
    Graph,
    Vertex,
    MouseCoordinate,
    ShapeSize,
    InputVertexConnector,
    OutputVertexConnector,
    GraphSerializable,
} from 'dag-builder-js';
import { saveAs } from 'file-saver';
import './style.css';

/* Catalog of actions */
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

/* Dag-build-js initialisation */
const vertexAddedCallback = (_type, _graph, vertex) => { console.log('vertexAddedCallback', vertex); }; // optional
const vertexRemovedCallback = (_type, _graph, vertex) => { console.log('vertexRemovedCallback', vertex); }; // optional
const edgeAddedCallback = (_type, _graph, edge) => { console.log('edgeAddedCallback', edge); }; // optional
const edgeRemovedCallback = (_type, _graph, edge) => { console.log('edgeRemovedCallback', edge); }; // optional

let graph = new Graph('#graph', vertexAddedCallback, vertexRemovedCallback, edgeAddedCallback, edgeRemovedCallback);

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
    document.getElementById('hidden-file-upload').click();
});

document.getElementById('hidden-file-upload').addEventListener('change', (event) => {
    const inputFile = document.getElementById('hidden-file-upload');
    const [file] = inputFile.files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        const txtRes = reader.result;
        const jsonObj = JSON.parse(txtRes);
        const graphSerializable = Object.assign(new GraphSerializable, jsonObj);
        graph.import(graphSerializable);
    }, false);

    if (file) {
        reader.readAsText(file);
        inputFile.value = '';
    }
});

document.getElementById('download-input').addEventListener('click', () => {
    const output = graph.export();
    const blob = new Blob([JSON.stringify(output)], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dag.json");
});

document.getElementById('delete-graph').addEventListener('click', () => {
    graph.clear();
});