'use strict'
const server = require('./app');

const jwt = require('jsonwebtoken');
const uuid = require('node-uuid');
const moment = require('moment')
const fs = require('fs')

const db = require('./model/db')

const word = fs.readFileSync('./word/word.txt', 'utf-8');
const words = word.split("\r\n"); //字符分割 

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

// const io = require('socket.io-emitter')({
//     host: '127.0.0.1',
//     port: 6379
// });

// setInterval(function() {
//     io.emit('system', new Date);
// }, 4000);

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 100;
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
        // console.log(data);
        data.content = data.content.replace(/\s+/g, "");
        let pass = words.every(function (w) {
            if (data.content.indexOf(w) > -1) {
                return false
            }
            return true
        })
        if (!pass) { 
            socket.emit('nopass', true);
            return
        }
        data.time = parseInt(moment() / 1000)
        db.chat.create(data)
        // socket.emit('chat', data);
        // socket.broadcast.emit('chat', data);
        sockets.sockets.emit('chat', data)
    });
    socket.on('system', function (data) {
        console.log(data);
        // data.time = parseInt(moment() / 1000)
        // socket.emit('chat', data);
        // socket.broadcast.emit('chat', data);
    });
    socket.on('disconnect', function () {
        onlineCount--
        console.log('当前在线人数：' + onlineCount);
        socket.broadcast.emit('userdisconnect', onlineUsers[cookies.uuid] + '下线了！');
    });
});