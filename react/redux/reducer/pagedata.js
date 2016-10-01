'use strict'

let init = {
    pages: {
        total: 0,
        last_page: 0,
        current_page:1
    }
}

export function pagedata(state = init, action) {
    switch (action.type) {
        case 'pagedata':
            return action.data
        default:
            return state;
    }
}