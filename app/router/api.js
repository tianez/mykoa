'use strict'

const router = require('koa-router')({
    prefix: '/api'
});

const apicontroller = require('../controllers/api');

/**
 * 设置响应头信息
 */
router.all('*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type,token");
    ctx.set("Access-Control-Allow-Method", "PUT,POST,GET,DELETE,OPTIONS");
    await next();
})

router.options('*', async(ctx, next) => {
    ctx.status = 204
})

/**
 * 创建token
 * 移除token
 * token验证
 * 模块权限验证
 * 获取当前token
 */
router.post('/', apicontroller.createToken);
router.post('/createtoken', apicontroller.createToken);
router.get('/removetoken', apicontroller.removeToken);

router.all('*', apicontroller.authToken)
router.get('/meun', apicontroller.getMeun);
router.all('*', apicontroller.authModule)

router.get('/', apicontroller.getToken);
router.get('/getToken', apicontroller.getToken);

/**
 * 一些常用数据拉取
 * 注意不要和后面的模块方法重名，否则会覆盖后面的模块方法
 */

router.get('/role', apicontroller.getRole);


router.post('/upload', apicontroller.postUpload);

/**
 * 试题模块
 */
router.get('/tests', apicontroller.get_List_Test);
router.get('/tests/add', apicontroller.get_Add_Test);
router.get('/tests/addoption', apicontroller.get_Add_Test_Option);
router.get('/tests/detail/:id', apicontroller.get_Detail_Test);
router.post('/tests/detail', apicontroller.post_Detail_Test);
router.get('/tests/delete/:id', apicontroller.get_Delete_Test);

/**
 * 权限模块编辑操作
 */
router.get('/permissions/detail/:id', apicontroller.getPermissions);
router.post('/permissions/detail', apicontroller.updatePermissions);
/**
 * 用户模块编辑操作
 */
router.get('/users/detail/:id', apicontroller.getUsers);
router.post('/users/detail', apicontroller.updateUsers);

/**
 * 默认系统模块操作方法
 * 会被前面单独设置的模块方法覆盖
 */
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