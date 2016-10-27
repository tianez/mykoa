'use strict'

export function config(name, value) {
    store.dispatch({ type: 'config', name, value });
}