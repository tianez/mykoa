'use strict'

 window.socket = io('http://localhost:3000');
        socket.on('news', function (data) {
            console.log(data);
            alert(data)
            // setTimeout(function() {
            socket.emit('news2', '你好啊，我是测试人员01' + new Date());
            // }, 1000)
        });

        socket.on('chat', function (data) {
             Rd.comment({chat:data});
        });

       

        socket.on('user connected', function (data) {
            console.log(data);
            // setTimeout(function() {
            // socket.emit('news2', '你好啊，我是测试人员01' + new Date());
            // }, 1000) 
        });

        socket.on('reconnect_failed', function (data) {
            console.log('data');
            // setTimeout(function() {
            // socket.emit('news2', '你好啊，我是测试人员01' + new Date());
            // }, 1000) 
        });
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

const routers = require('./router')

function render() {
    ReactDOM.render(
        React.createElement(Provider, {
                store: store
            },
            routers),
        document.getElementById('app')
    ) 
}
render()
function Init() {
    getfetch("admin/user")
        .then(function (response) {
            Rd.user(response)
            render()
        }).catch(function (err) {
            console.log("Fetch错误:" + err);
        });
}

// Init()