"use strict";

export const ACTION_TYPE = {
    /* Edge connector drag events */
    EDGE_CONN_DRAG_START_ACTION: 1,
    EDGE_CONN_DRAG_END_ACTION: 2,
    EDGE_CONN_DRAGGING_ACTION: 3,
};

export function isFunction(value) {
    return typeof value === typeof Function;
}

export function translationMat(nodeEl) {
    return nodeEl.transform.baseVal.getItem(0).matrix;
}

export const EMPTY_TRANSLATION_MAT = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
};