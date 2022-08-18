"use strict";

export const ACTION_TYPE = {
    EDGE_CONN_DRAG_START_ACTION: 1,
    EDGE_CONN_DRAG_END_ACTION: 2,
    EDGE_CONN_DRAGGING_ACTION: 4,
};

export function isFunction(value) {
    return typeof value === typeof Function;
}