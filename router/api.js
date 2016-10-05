'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const Db = require('../controllers/Db')

const router = require('koa-router')({
    prefix: '/api'
});

const apicontroller = require('../controllers/api');

router.post('/', getToken);

router.all('*', auth)

router.get('/', apicontroller.getHome);
router.get('/user', apicontroller.getUser);

router.get('/dd', async(ctx, next) => {
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

async function getToken(ctx, next) {
    console.log(moment().format("YYYY-MM-DD H:mm:ss"));
    let users = await new Db('users').where({
        id: 1
    }).get();
    let data = users[0]
    delete data.password
    data.exp = parseInt(moment() / 1000) + 3600
    data.expre = parseInt(moment() / 1000) + 1800
    console.log(data);
    let token = jwt.sign(data, 'shhhhh');
    // ctx.cookies.set('token', token)
    ctx.type = 'json';
    ctx.body = JSON.stringify({
        token: token
    })
}

async function auth(ctx, next) {
    global.event.emit('chat','haodeasd');
    console.log('1111111111');
    
    let token
    if (ctx.query.token) {
        token = ctx.query.token
    } else if (ctx.headers.token) {
        token = ctx.headers.token
    } else if (ctx.cookies.get('token')) {
        token = ctx.cookies.get('token')
    }
    console.log('当前token：' + token);
    try {
        let decoded = jwt.verify(token, 'shhhhh');
        // console.log(decoded)
        if (decoded.expre < parseInt(moment() / 1000)) {
            delete decoded.iat
            decoded.exp = parseInt(moment() / 1000) + 3600
            decoded.expre = parseInt(moment() / 1000) + 1800
            let newtoken = jwt.sign(decoded, 'shhhhh');
            ctx.set({
                token: newtoken
            })
        }
        ctx.type = 'json';
        await next();
    } catch (err) {
        ctx.status = err.status || 401;
        ctx.type = 'json';
        ctx.body = JSON.stringify({
            error: err.message
        })
    }
}

module.exports = router;