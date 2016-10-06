'use strict'

require('./event');

const Koa = require('koa');
const app = new Koa();

// app.use(require('koa-bodyparser')());
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


var os = require('os');
var path = require('path');
var fs = require('co-fs');
var parse = require('co-busboy');
var saveTo = require('save-to');

app.use(function* (next) {
    if (this.method != 'POST') {
        return yield next
    }
    // parse the multipart body
    var parts = parse(this, {
        autoFields: true // saves the fields to parts.field(s)
    });
    // create a temporary folder to store files
    var tmpdir = path.join(os.tmpdir(), uid());
    console.log(tmpdir);
    var tmpdir2 = path.join(__dirname+'uploads/', uid());
    console.log(tmpdir2);
    // make the temporary directory
    yield fs.mkdir(tmpdir);
    yield fs.mkdir(tmpdir2);

    // list of all the files
    var files = [];
    var file;

    // yield each part as a stream
    var part;
    console.log(parts);

    while (part = yield parts) {
        // filename for this part
        files.push(file = path.join(tmpdir, part.filename));
        // save the file
        yield saveTo(part, file);
    }

    // return all the filenames as an array
    // after all the files have finished downloading
    this.body = files;
})

function uid() {
    return Math.random().toString(36).slice(2);
}


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

module.exports = server;