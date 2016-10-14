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

router.get('/', apicontroller.getToken);
router.get('/getToken', apicontroller.getToken);

// router.get('/user', apicontroller.getUser);
// router.get('/fields', apicontroller.getFields);
// router.get('/fields/:name', apicontroller.getField);
// router.get('/field/:id', apicontroller.getFieldid);

router.get('/meun', apicontroller.getMeun);
// router.get('/chats', apicontroller.getChats);
// router.get('/chats/add', apicontroller.addChat);
// router.post('/chats/add', apicontroller.postChat);
// router.get('/chats/detail/:id', apicontroller.getChat);
// router.get('/chats/delete/:id', apicontroller.deleteChat);

// router.get('/topic', apicontroller.getTopics);
// router.get('/topic/add', apicontroller.addTopic);
// router.post('/topic/add', apicontroller.postTopic);
// router.get('/topic/detail/:id', apicontroller.getTopic);
// router.post('/topic/detail', apicontroller.updateTopic);
// router.get('/topic/delete/:id', apicontroller.deleteTopic);


router.post('/upload', apicontroller.postUpload);

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