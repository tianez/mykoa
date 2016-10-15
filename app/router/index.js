'use strict'

const router = require('koa-router')();
const uuid = require('node-uuid');
const jwt = require('jsonwebtoken');

const controller = require('../controllers/home');
const wechat = require('../controllers/wechat');
const test = require('../controllers/test');

router.get('/', controller.home);
router.get('/dataimport', controller.dataimport);

router.get('/admin', controller.getAdmin);

router.get('/upload', controller.getUpload);
router.post('/upload', controller.postUpload);

router.get('/wechat', wechat.weixin);
router.post('/wechat', wechat.postweixin);

router.get('/test', test);

module.exports = router;