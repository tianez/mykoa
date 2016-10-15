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

router.post('/', apicontroller.createToken);
router.post('/createtoken', apicontroller.createToken);
router.get('/removetoken', apicontroller.removeToken);

router.all('*', apicontroller.authToken)
router.all('*', apicontroller.authModule)

router.get('/', apicontroller.getToken);
router.get('/getToken', apicontroller.getToken);


router.get('/meun', apicontroller.getMeun);


router.post('/upload', apicontroller.postUpload);

router.get('/user/detail/:id', apicontroller.getUser);
router.post('/user/detail', apicontroller.updateUser);


router.get('/:module', apicontroller.getList);
router.get('/:module/add', apicontroller.getAdd);
router.post('/:module/add', apicontroller.postAdd);
router.get('/:module/detail/:id', apicontroller.getDetail);
router.post('/:module/detail', apicontroller.updateDetail);
router.get('/:module/delete/:id', apicontroller.getDelete);

router.get('/dd', async(ctx, next) => {
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;