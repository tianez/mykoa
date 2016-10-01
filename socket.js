'use strict'
const server = require('./app');

const sockets = require('socket.io').listen(server).sockets

sockets.on('connection', function(socket) {
    socket.emit('news', '你好！测试人员01');
    socket.broadcast.emit('user connected', '有新人员加入！');
    socket.on('news2', function(data) {
        console.log(data);
        // setTimeout(function() {
        //     socket.emit('news', '你好啊，我是测试人员02' + new Date());
        // }, 1000)
    });
    socket.on('chat', function(data) {
        console.log(data);
            socket.emit('chat', data);
    });
    socket.on('disconnect', function() {
        socket.broadcast.emit('user connected', '有人员下线了！');
    });
});