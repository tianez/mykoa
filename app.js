'use strict'

var app = require('koa')();
var router = require('koa-router')();

router.get('/', function* (next) {
    this.body = 'Hello World';
});

router.get('/dd', function* (next) {
    this.body = 'Hello World2';
});
app.use(router.routes())
app.use(router.allowedMethods());

// app.use(function* () {
//     this.body = 'Hello World';
// });


app.use(function* pageNotFound(next) {
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