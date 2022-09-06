Directed-Acyclic-Graph-Builder-js (dag-builder-js)
===

## What is this?
dag-builder-js is a simple-to-use Javascript DAG library with support to N:N vertices/edges. It supports validating that no cycle can be created in real-time, import/export states and it's built on SVG so you can render graphs pretty much anywhere.

## Demo
![Demo](https://media.giphy.com/media/QNVOHs7kIbgLsMP7CN/giphy.gif)

**Live demo**: [https://paulomigalmeida.github.io/directed-acyclic-graph-builder-js/demo/static/index.html](https://paulomigalmeida.github.io/directed-acyclic-graph-builder-js/demo/static/index.html)

Running the demo in your computer can be achieved by running:

```bash
# build dag-builder-js
cd <root-dir>
npm install
npm run build

# build & start demo
cd ./demo
npm install
npm run start
```

## Installation

Adding dag-builder-js is pretty simple:

Minified version
```html
<script src='https://cdn.jsdelivr.net/npm/dag-builder-js' type="module" charset="utf-8"></script>
```

Debug version
```html
<script src='https://cdn.jsdelivr.net/npm/dag-builder-js/dist/dag.debug.js' type="module" charset="utf-8"></script>

```

Or 

```bash
npm i dag-builder-js --save
# node -v -> v16.14.0
# npm -v -> 8.3.1
```

## Usage

Define a container in which the DAG will be rendered

```html
<div id="graph"></div>
```

Initialise DAG builder

```javascript
import {
    Graph,
    Vertex,
    MouseCoordinate,
    ShapeSize,
    InputVertexConnector,
    OutputVertexConnector,
    GraphSerializable,
} from "dag-builder-js"; // (~70kb)
// Or: (for troubleshooting)
//  from 'dag-builder-js/dist/dag.debug'; (~300kb)

const onVertexAdded = (type, graph, vertex) => {}; // optional
const onVertexRemoved = (type, graph, vertex) => {}; // optional
const onEdgeAdded = (type, graph, edge) => {}; // optional
const onEdgeRemoved = (type, graph, edge) => {}; // optional

let graph = new Graph('#graph', onVertexAdded, onVertexRemoved, onEdgeAdded, onEdgeRemoved);

graph.appendVertex(new Vertex(
    // location
    new MouseCoordinate(100, 100),
    // size
    new ShapeSize(200, 100),
    // title
    'Vertex Title',
    // inputs
    [
        new InputVertexConnector(0, 'data_in', "type1"),
        new InputVertexConnector(1, 'other_in', 'type2'),
    ],
    // outputs
    [new OutputVertexConnector(0, 'data_out', 'type3')],
));

// render changes
graph.update();

```

## Callbacks

### onVertexAdded
```javascript

function onVertexAdded(type, graph, vertex){
	// When vertex is added to graph
}
```
Gets triggered when vertex is appended to graph.

Parameter | Type | Description
--- | --- | ---
   `type` | number | event code (see more at: [ACTION_TYPE](src/events/event.js))
   `graph` | [Graph](src/graphs/graph.js) | Graph instance
   `vertex` | [Vertex](src/vertices/vertex.js) | Vertex added

### onVertexRemoved
```javascript

function onVertexRemoved(type, graph, vertex){
	// When vertex is removed from graph
}
```
Gets triggered when vertex is removed from graph.

Parameter | Type | Description
--- | --- | ---
   `type` | number | event code (see more at: [ACTION_TYPE](src/events/event.js))
   `graph` | [Graph](src/graphs/graph.js) | Graph instance
   `vertex` | [Vertex](src/vertices/vertex.js) | Vertex removed


### onEdgeAdded
```javascript

function onEdgeAdded(type, graph, vertex){
	// When edge is added to graph
}
```
Gets triggered when edge is appended to graph.

Parameter | Type | Description
--- | --- | ---
   `type` | number | event code (see more at: [ACTION_TYPE](src/events/event.js))
   `graph` | [Graph](src/graphs/graph.js) | Graph instance
   `edge` | [Edge](src/edges/edge.js) | Edge added

### onEdgeRemoved
```javascript

function onEdgeRemoved(type, graph, vertex){
	// When edge is removed from graph
}
```
Gets triggered when edge is removed from graph.

Parameter | Type | Description
--- | --- | ---
   `type` | number | event code (see more at: [ACTION_TYPE](src/events/event.js))
   `graph` | [Graph](src/graphs/graph.js) | Graph instance
   `edge` | [Edge](src/edges/edge.js) | Edge removed

## Features

 - [x] Zooming/Pan Gestures
 - [x] Select Vertices/Edges
 - [x] Delete Vertices/Edges
 - [x] Move Vertices
 - [x] Import/Export Graph State
 - [x] Real-time acyclic validation (prevent users from creating cycles)
 - [x] N:N Edges Connections
 - [x] Public-facing callbacks for common operations (add/rem)
 - [x] Npm package
 

## Credits/Inspiration/Pieces of code I got from other projects

### Flowy

**Repository:** [alyssaxuu/flowy](https://github.com/alyssaxuu/flowy)

I got the demo page HTML/CSS and some ideas for documentation and callback listeners. It's a very interesting project and the fact that Alyssa did it all in vanilla javascript is commendable. Kudos to her.

### Directed-Graph-Creator

**Repository:** [cjrd/directed-graph-creator](https://github.com/cjrd/directed-graph-creator)

I got a lot of inspiration from the implemenation that @cjrd has written so he also deserves to be listed here. I got the import/export idea from his implementation and learned that I could use d3 for SVG manipulation (which I didn't know at the time).
