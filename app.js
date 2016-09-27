'use strict'

const Koa = require('koa');
const app = new Koa();

var router = require('koa-router')();

router.get('/', function* (next) {
    yield next
    console.log('1wode');
    this.body = 'Hello World';
});

app.use(function* chat(next) {
    console.log('123232');
    yield next
    console.log('123232222');
})

router.get('/dd', function* (next) {
    this.body = 'Hello World2';
});
app.use(router.routes())
app.use(router.allowedMethods());


app.use(function* pageNotFound(next) {
    console.log('89');
    yield next;

    if (404 != this.status) return;

    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    this.status = 404;

    switch (this.accepts('html', 'json')) {
        case 'html':
            this.type = 'html';
            this.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            this.body = {
                message: 'Page Not Found'
            };
            break;
        default:
            this.type = 'text';
            this.body = 'Page Not Found';
    }
})

app.listen(3001);