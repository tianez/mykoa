'use strict'

export function message(state = '', action) {
    switch (action.type) {
        case 'message':
            return {
                msg:action.data,
                time:new Date()
            }
        default:
            return state;
    }
}