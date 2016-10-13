'use strict'

const router = require('koa-router')({
    prefix: '/chat'
});

const controller = require('../controllers/chat');


router.all('*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type,token");
    ctx.set("Access-Control-Allow-Method", "PUT,POST,GET,DELETE,OPTIONS");
    await next();
})

router.options('*', async(ctx, next) => {
    ctx.status = 204
})

router.get('/list', controller.getList);
router.post('/login', controller.postLogin);
 
module.exports = router;