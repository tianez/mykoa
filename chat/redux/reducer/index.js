'use strict'
import {combineReducers} from 'redux';

function clone(myObj) {
    if (typeof (myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function config(state = {}, action) {
    switch (action.type) {
        case 'config':
            let config = clone(state)
            config[action.name] = action.value
            return config
        // return Object.assign(config, action)
        default:
            return state;
    }
}

function comment(state = [], action) {
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

function today(state = [], action) {
    switch (action.type) {
        case 'today':
            return [
                action,
                ...state
            ];
        case 'todays':
            return action.comments;
        default:
            return state;
    }
}

function yesterday(state = [], action) {
    switch (action.type) {
        case 'yesterday':
            return action.comments;
        default:
            return state;
    }
}


const reducer = combineReducers({
    counter,
    config,
    comment,
    today,
    yesterday
})

export default reducer;