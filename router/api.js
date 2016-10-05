'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const Db = require('../controllers/Db')

const router = require('koa-router')({
    prefix: '/api'
});

const apicontroller = require('../controllers/api');

router.post('/', getToken);
router.get('/', getToken);

router.all('*', auth)

// router.get('/', apicontroller.getHome);
router.get('/user', apicontroller.getUser);



router.get('/dd', async(ctx, next) => {
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});


async function getToken(ctx, next) {

    let users = await new Db('users').where({
        id: 1
    }).get();
    console.log(users[0].id);

    let roles = await new Db('roles').where({
        id: users[0].id
    }).get();
    let role = []
    for (let i in roles) {
        let roles = await new Db('roles').where({
            id: users[0].id
        }).get();
        role[i] = roles[i].id
    }
    console.log(role);
    let data = users[0]
    delete data.password
    console.log(moment().format("YYYY-MM-DD H:mm:ss"));
    data.exp = parseInt(Date.now() / 1000) + 3600
    console.log(data);
    
    let token = jwt.sign(data, 'shhhhh');
    console.log('token:' + token);
    ctx.cookies.set('token', token)
    ctx.type = 'json';
    ctx.body = JSON.stringify({
        token: token
    })
}

async function auth(ctx, next) {
    let token = ctx.cookies.get('token');
    console.log('当前token：' + token);
    try {
        let decoded = jwt.verify(token, 'shhhhh');
        console.log(decoded) // bar
        ctx.type = 'json';
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.type = 'json';
        ctx.body = JSON.stringify({
            error: err.message
        })
    }
}

module.exports = router;