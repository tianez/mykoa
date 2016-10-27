'use strict'

export function user(state = {}, action) {
    switch (action.type) {
        case 'user':
            return action.data
        default:
            return state;
    }
}