'use strict'

const router = require('koa-router')();

const controller = require('../controllers');

const uuid = require('node-uuid');
const jwt = require('jsonwebtoken');

router.all('/', async(ctx, next) => {
    if (!ctx.cookies.get('name')) {
        ctx.cookies.set('uuid', uuid.v1());
    }
    // console.log(ctx.request.header);
    var token = jwt.sign({
        foo: 'bar'
    }, 'shhhhh');
    console.log(token);

    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded) // bar
    await next();
})

router.get('/', controller.home);

router.get('/dd', async(ctx, next) => {
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;