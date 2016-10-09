'use strict'
const server = require('./app');

const jwt = require('jsonwebtoken');
const uuid = require('node-uuid');

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
setInterval(function() {
    io.emit('chat', new Date);
}, 30000);

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
sockets.on('connection', function(socket) {
    onlineCount++
    console.log('当前在线人数：' + onlineCount);

    // 获得客户端的Cookie
    // console.log(socket.handshake.headers.cookie);
    let cookie = socket.handshake.headers.cookie
    let cookies = {};
    cookie && cookie.split(';').forEach(function(c) {
        let parts = c.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    setInterval(function() {
        socket.volatile.emit('ping', 'ping ' + new Date(), function(data) {
            console.log(data); // data will be 'woot'
        });
    }, 30000)

    socket.on('login', function(data) {
        let user = {}
        let message
        let message2
        if (data.userid) {
            user = {
                userid: data.userid,
                username: data.username,
            }
            message = '欢迎' + user.username + '你回来'
            message2 = '欢迎' + user.username + '回来'
        } else {
            user = {
                userid: uuid.v1(),
                username: '游客' + onlineCount,
            }
            message = '欢迎' + user.username + '你加入'
            message2 = '欢迎新人员' + user.username + '加入'
        }
        user.socket = socket
        onlineUsers[user.userid] = user
        socket.emit('login', {
            userid: user.userid,
            username: user.username,
            message: message
        });
        socket.broadcast.emit('userconnected', message2);
    });



    socket.on('chat', function(data) {
        if (!data.trim()) {
            return
        }
        // fetch('http://www.mycms.com/test').
        console.log(data);
        socket.emit('chat', '你对大家说：' + data);
        socket.broadcast.emit('chat', onlineUsers[cookies.uuid] + '对大家说：' + data);
    });
    socket.on('disconnect', function() {
        onlineCount--
        console.log('当前在线人数：' + onlineCount);
        socket.broadcast.emit('userdisconnect', onlineUsers[cookies.uuid] + '下线了！');
    });

    // global.event.on('chat', function (data) {
    //     console.log(data);
    //     console.log(sockets);

    //     // console.log(sockets.sockets);
    //     // sockets.forEach(function(sock){
    //     // sockets[0].emit('chat', 'system: 对大家说：' + data);
    //     // })
    //     // socket.broadcast.emit('chat', 'system: 对大家说：' + data);
    //     // console.log('chat 事件触发' + data);
    // });
});