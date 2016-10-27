'use strict'

export function message(data) {
    store.dispatch({ type: 'message', data });
}