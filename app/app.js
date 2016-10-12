'use strict'

require('./event');

const Koa = require('koa');
const app = new Koa();

const xml2js = require('xml2js');

app.use(async(ctx, next) => {
    console.log('111');
    var buffers = [];
    ctx.req.on('data', function (trunk) {
        buffers.push(trunk);
    });
    ctx.req.on('end', function () {
        Buffer.concat(buffers)
        let xml = buffers.toString('utf-8');
        ctx.xml = xml
    });
    await next();
})

app.use(require('koa-better-body')({
    multipart: true
}));

// app.use(require('./middleware/logs')); 

const serve = require("koa-static2")
app.use(serve("public", __dirname + "/../public"));
app.use(serve("uploads", __dirname + "/../uploads"));

const session = require('koa-session');
app.keys = ['some secret hurr']; 
app.use(session(app));

const render = require('./middleware/render');
app.use(render('view', {
    noCache: true,
    watch: true,
    extname: 'html'
}));

app.use(async(ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.type = 'html';
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
})

// app.on('error', function (err, ctx) {
//     console.log('err:' + err.status + err.message);
//     console.log(err);
// });


const router = require('./router');
const api = require('./router/api');
app.use(router.routes());
app.use(api.routes());

app.use(require('./middleware/page404'))

const server = app.listen(3000, function () {
    console.log('Koa is listening to http://localhost:3000');
});
app.listen(4040, function () {
    console.log('Koa is listening to http://localhost:4040');
});

module.exports = server;