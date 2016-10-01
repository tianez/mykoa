'use strict'

export function comments(state = [], action) {
    switch (action.type) {
        case 'comment':
            return [
                action,
                ...state
            ];
        case 'comments':
            return action.comments;
        default:
            return state;
    }
}