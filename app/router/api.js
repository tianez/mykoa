'use strict'

const router = require('koa-router')({
    prefix: '/api'
});

const apicontroller = require('../controllers/api');


router.all('*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type,token");
    ctx.set("Access-Control-Allow-Method", "PUT,POST,GET,DELETE,OPTIONS");
    await next();
})

router.options('*', async(ctx, next) => {
    ctx.status = 204
})

router.post('/', apicontroller.getToken);

// router.all('*', apicontroller.auth)

router.get('/', apicontroller.getHome);
router.get('/user', apicontroller.getUser);
router.get('/field', apicontroller.getField);

router.post('/upload', apicontroller.postUpload);

router.get('/dd', async(ctx, next) => {
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;