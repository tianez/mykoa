'use strict'

window.socket = io('http://' + document.domain + ':3000', {
    reconnect: true
});
socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
    socket.on('ping', function (data, fn) {
        // console.log(name);
        fn('ping ' + new Date());
    });
    socket.emit('login', {
        userid: localStorage.userid,
        username: localStorage.username
    });
});
socket.on('login', function (data) {
    console.log(data);
    localStorage.userid = data.userid
    localStorage.username = data.username
    Rd.comment({
        chat: data.message
    });
});

socket.on('chat', function (data) {
    Rd.comment({
        chat: data
    });
});

socket.on('userconnected', function (data) {
    Rd.comment({
        chat: data
    });
});
socket.on('userdisconnect', function (data) {
    Rd.comment({
        chat: data
    });
});
socket.on('disconnect', function () {
    console.log('连接已断开...');
    // intervalID = setInterval(function () {
    //     socket.reconnect();
    //     clearInterval(intervalID);
    // }, 4000);
});
socket.on('reconnecting', function () {
    console.log('正在连接中...');
})
socket.on('reconnect', function () {
    console.log('断线重连成功！');
})
socket.on('reconnect_failed', function (data) {
    console.log('data');
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