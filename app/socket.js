'use strict'
const server = require('./app');

const jwt = require('jsonwebtoken');
const uuid = require('node-uuid');
const moment = require('moment')

const db = require('./model/db')

const sockets = require('socket.io').listen(server, {
    'timeout': 300000,
    'reconnection': true,
    'reconnectionDelayMax': 30000,
    'reconnectionDelay': 1000
})

const redis = require('socket.io-redis');
sockets.adapter(redis({
    host: '127.0.0.1',
    port: 6379
}));

const io = require('socket.io-emitter')({
    host: '127.0.0.1',
    port: 6379
});
// setInterval(function() {
//     io.emit('chat', new Date);
// }, 30000);

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
sockets.on('connection', function (socket) {
    onlineCount++
    console.log('当前在线人数：' + onlineCount);
    socket.emit('login', onlineCount);
    socket.broadcast.emit('login', onlineCount);

    // 获得客户端的Cookie
    let cookie = socket.handshake.headers.cookie
    let cookies = {};
    cookie && cookie.split(';').forEach(function (c) {
        let parts = c.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    setInterval(function () {
        socket.volatile.emit('ping', 'ping ' + new Date(), function (data) {
            // console.log(data); // data will be 'woot'
        });
    }, 30000)

    socket.on('chat', function (data) {
        console.log(data);
        data.time = parseInt(moment() / 1000)
        db.chat.create(data)
        socket.emit('chat', data);
        socket.broadcast.emit('chat', data);
    });
    socket.on('disconnect', function () {
        onlineCount--
        console.log('当前在线人数：' + onlineCount);
        socket.broadcast.emit('userdisconnect', onlineUsers[cookies.uuid] + '下线了！');
    });
});