'use strict'
const server = require('./app');

const sockets = require('socket.io').listen(server, {
        'timeout': 300000,
        'reconnection': true,
        'reconnectionDelayMax': 30000,
        'reconnectionDelay': 1000
    }).sockets
    //在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
sockets.on('connection', function (socket) {
    setInterval(function () {
        socket.volatile.emit('ping', 'ping ' + new Date(), function (data) {
            console.log(data); // data will be 'woot'
        });
    }, 10000)

    // 获得客户端的Cookie
    // console.log(socket.handshake.headers.cookie);
    let cookie = socket.handshake.headers.cookie
    let cookies = {};
    cookie && cookie.split(';').forEach(function (c) {
        let parts = c.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    // console.log(cookies)
    if (!onlineUsers[cookies.uuid]) {
        onlineCount++
        console.log(onlineCount);
        onlineUsers[cookies.uuid] = {
            socket: socket,
            user: {
                name: '游客' + onlineCount
            }
        }
        socket.emit('login', '你好！' + onlineUsers[cookies.uuid].user.name + socket.id);
        socket.broadcast.emit('userconnected', '欢迎新人员' + onlineUsers[cookies.uuid].user.name + '加入！');
    } else {
        socket.emit('login', '欢迎你回来！' + onlineUsers[cookies.uuid].user.name + socket.id);
        socket.broadcast.emit('userconnected', '欢迎' + onlineUsers[cookies.uuid].user.name + '回来！');
    }

    socket.on('chat', function (data) {
        if (!data.trim()) {
            return
        }
        fetch('http://www.mycms.com/test').
        console.log(data);
        socket.emit('chat', '你对大家说：' + data);
        socket.broadcast.emit('chat', onlineUsers[cookies.uuid].user.name + '对大家说：' + data);
    });
    socket.on('disconnect', function () {
        socket.broadcast.emit('userdisconnect', onlineUsers[cookies.uuid].user.name + '下线了！');
    });
});