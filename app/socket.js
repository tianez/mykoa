'use strict'
const server = require('./app');

const jwt = require('jsonwebtoken');
const uuid = require('node-uuid');
const moment = require('moment')
const fs = require('fs')

const db = require('./model/db')
 
const db2 = require('./lib/adb')
const dbs = new db2()

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

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 100;
sockets.on('connection', function (socket) {
    onlineCount++
    let m = moment().format('M')
    let day = moment().format('D')
    let d = moment().format('d')
    let taj = Number(m) + Number(day) + Number(d)
    let allcont = onlineCount + taj
    console.log('当前在线人数：' + allcont);
    socket.emit('login', allcont);
    socket.broadcast.emit('login', allcont);
    dbs.table('topic').where({
            status: 0
        })
        .limit(1)
        .get(function (res) {
            socket.emit('system', {
                content: res[0].content,
                username: 'system',
                realname: '<span style="color: #f00;">（系统消息）' + res[0].title + '</span>',
                time: parseInt(moment() / 1000),
                user_id: 0,
                head_img: 'public/images/zhibo/logo.jpg'
            })
        })
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
        if (!data.realname) {
            let username = data.username
            let pre = username.slice(0, 3)
            let aft = username.slice(7)
            data.realname = pre + '****' + aft
        }
        db.chat.create(data)
            // socket.emit('chat', data);
            // socket.broadcast.emit('chat', data);
        sockets.sockets.emit('chat', data)
    });
    socket.on('disconnect', function () {
        onlineCount--
        allcont = onlineCount + taj
        socket.broadcast.emit('login', allcont);
        // socket.broadcast.emit('userdisconnect', onlineUsers[cookies.uuid] + '下线了！');
    });
});