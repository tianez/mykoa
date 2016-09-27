'use strict'

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async(ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    console.log('start:' + start);
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

const render = require('./function/render');
app.use(render('view', {
    noCache: true,
    watch: true,
    extname: 'html'
}));

const router = require('./router');
app.use(router.routes());

app.on('error', function(err, ctx) {
    console.log(err);
});



const server = app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});

const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
let wss = new WebSocketServer({
    server: server
});

wss.on('connection', function(ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function(message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});

let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function() {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function(message) {
    console.log(`[CLIENT] Received: ${message}`);
})