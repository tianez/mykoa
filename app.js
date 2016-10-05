'use strict'



const Koa = require('koa');
// var Koa = require('koa.io');
const app = new Koa();

app.use(require('koa-bodyparser')());
// app.use(require('./middleware/logs')); 

const serve = require("koa-static2")
app.use(serve("static", __dirname + "/public"));
app.use(serve("css", __dirname + "/public/css"));
app.use(serve("js", __dirname + "/public/js"));

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
        ctx.cookies.set('name', '123456');
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

module.exports = server;