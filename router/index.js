'use strict'

const router = require('koa-router')();
const env = require('../function/render');

router.get('/', async(ctx, next) => {
    console.log('haoed');
    // ctx.body = '<h1>Hello</h1>';
    ctx.body = env.render('home.html', { username: 'Bob' });
});

router.get('/dd', async(ctx, next) => {
    console.log('haoed');
    ctx.render('home', { username: 'James' });
});

module.exports = router;