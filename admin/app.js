'use strict'
// const React = require('react');
// const ReactDOM = require('react-dom');
// const ReactRouter = require('react-router');
// import './less/style.less' //webpack编译时导入
require('./global')

//应用中间件
import {
    createStore,
    applyMiddleware
} from 'redux'
import reducer from './redux/reducer';
import thunk from 'redux-thunk'
import log from './redux/middleware';
let createStoreWithLog = applyMiddleware(thunk)(createStore);
window.store = createStoreWithLog(reducer)
store.subscribe(() => {
    let state = store.getState()
    console.log(state);

    window.document.title = state.config.title
})

import {
    Provider,
    connect
} from 'react-redux'

window.connect = connect
window.Rd = require('./redux/actions')

const routers = require('./config/router')

function render() {
    ReactDOM.render(
        React.createElement(Provider, {
                store: store
            },
            routers),
        document.getElementById('app')
    )
}
 
function Init() {
    getfetch("api")
        .then(function (res) {
            render()
        }).catch(function (err) {
            console.log("Fetch错误:" + err);
        })
}

Init()