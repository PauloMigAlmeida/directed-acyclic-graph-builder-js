/* SPDX-License-Identifier: GPL-3.0-only */
"use strict";

export const ACTION_TYPE = {
    /* Edge connector drag events */
    EDGE_CONN_DRAG_START_ACTION: 1,
    EDGE_CONN_DRAG_END_ACTION: 2,
    EDGE_CONN_DRAGGING_ACTION: 3,

    /* Vertex drag events */
    VERT_DRAGGING_ACTION: 4,

    /* Public-facing vertex events */
    VERT_ADDED_ACTION: 5,
    VERT_REMOVED_ACTION: 6,

    /* Public-facing edge events */
    EDGE_ADDED_ACTION: 7,
    EDGE_REMOVED_ACTION: 8,

    /* Public-facing edge connector events */
    CUSTOM_INPUT_EDGE_CONN_CLICK_ACTION: 9,
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