/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : koa

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-10-18 18:15:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for db_article
-- ----------------------------
DROP TABLE IF EXISTS `db_article`;
CREATE TABLE `db_article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `keyword` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '关键词',
  `excerpt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '简介',
  `thumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '缩略图',
  `content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '内容',
  `link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '外链',
  `cat_id` int(11) NOT NULL DEFAULT '0' COMMENT '所属分类',
  `type` tinyint(1) DEFAULT NULL COMMENT '类型',
  `temp` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '模板',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '作者ID',
  `view` int(11) NOT NULL DEFAULT '0' COMMENT '浏览次数',
  `bookmark` int(11) NOT NULL DEFAULT '0' COMMENT '收藏数',
  `comment` int(11) NOT NULL DEFAULT '0' COMMENT '评论数',
  `comment_status` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '评论状态',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态，0：正常，1：锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `article_title_unique` (`title`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_article
-- ----------------------------

-- ----------------------------
-- Table structure for db_article_category
-- ----------------------------
DROP TABLE IF EXISTS `db_article_category`;
CREATE TABLE `db_article_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '分类名称',
  `ico` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '分类图标',
  `description` text COLLATE utf8_unicode_ci COMMENT '分类描述',
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '上级分类',
  `taxonomy` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'category' COMMENT '所属分类法',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态,0:正常,1:锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_article_category
-- ----------------------------
INSERT INTO `db_article_category` VALUES ('1', '默认分类', null, '分类名称', '0', 'category', '0', '2016-09-24 12:20:53', null);
INSERT INTO `db_article_category` VALUES ('2', '默认tags', null, '分类名称22', '0', 'tags', '0', '2016-09-24 12:20:53', '2016-10-15 17:53:07');

-- ----------------------------
-- Table structure for db_article_comments
-- ----------------------------
DROP TABLE IF EXISTS `db_article_comments`;
CREATE TABLE `db_article_comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '评论内容',
  `pid` int(11) NOT NULL COMMENT '上级评论id',
  `author_id` int(11) NOT NULL COMMENT '评论者id',
  `author_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论者名称',
  `author_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论者邮箱',
  `author_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论者网址',
  `author_ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论者IP',
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论所属模型',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态,0:正常,1:锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_article_comments
-- ----------------------------

-- ----------------------------
-- Table structure for db_article_meta
-- ----------------------------
DROP TABLE IF EXISTS `db_article_meta`;
CREATE TABLE `db_article_meta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `meta_key` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '字段名',
  `meta_value` text COLLATE utf8_unicode_ci NOT NULL COMMENT '字段值',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_article_meta
-- ----------------------------

-- ----------------------------
-- Table structure for db_article_taxonomy
-- ----------------------------
DROP TABLE IF EXISTS `db_article_taxonomy`;
CREATE TABLE `db_article_taxonomy` (
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `cat_id` int(11) NOT NULL COMMENT '分类id'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_article_taxonomy
-- ----------------------------

-- ----------------------------
-- Table structure for db_chat
-- ----------------------------
DROP TABLE IF EXISTS `db_chat`;
CREATE TABLE `db_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `realname` varchar(20) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `head_img` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=gbk COMMENT='直播评论表';

-- ----------------------------
-- Records of db_chat
-- ----------------------------
INSERT INTO `db_chat` VALUES ('51', '181****5432', null, '7', './public/images/avatar/00.jpg', '1476449174', 'zheyanghaoma', '0', '2016-10-14 12:46:14', '2016-10-14 12:46:14');
INSERT INTO `db_chat` VALUES ('53', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502565', 'haodedadasdasd', '0', '2016-10-15 03:36:05', '2016-10-15 03:36:05');
INSERT INTO `db_chat` VALUES ('54', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502614', 'haodsadasdsadsa', '0', '2016-10-15 03:36:54', '2016-10-15 03:36:54');
INSERT INTO `db_chat` VALUES ('55', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502648', 'haodedasdsadadasdsa', '0', '2016-10-15 03:37:28', '2016-10-15 03:37:28');
INSERT INTO `db_chat` VALUES ('56', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502746', '1111111111111111111', '0', '2016-10-15 03:39:06', '2016-10-15 03:39:06');
INSERT INTO `db_chat` VALUES ('57', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502949', '5555555555555', '0', '2016-10-15 03:42:29', '2016-10-15 03:42:29');
INSERT INTO `db_chat` VALUES ('58', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476502953', '5656654545', '0', '2016-10-15 03:42:33', '2016-10-15 03:42:33');
INSERT INTO `db_chat` VALUES ('59', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476503027', '555555555555656565', '0', '2016-10-15 03:43:47', '2016-10-15 03:43:47');
INSERT INTO `db_chat` VALUES ('60', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476503073', '111111111111111111', '0', '2016-10-15 03:44:33', '2016-10-15 03:44:33');
INSERT INTO `db_chat` VALUES ('61', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476503118', '99ererere', '0', '2016-10-15 03:45:18', '2016-10-15 03:45:18');
INSERT INTO `db_chat` VALUES ('62', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476507018', '测试名单那公司的事', '0', '2016-10-15 04:50:18', '2016-10-15 04:50:18');
INSERT INTO `db_chat` VALUES ('63', '18672035432', '186****5432', '9', './public/images/avatar/00.jpg', '1476507049', '测试当米', '0', '2016-10-15 04:50:49', '2016-10-15 04:50:49');
INSERT INTO `db_chat` VALUES ('64', '18672035432', null, '11', './uploads/jpeg/20161018/copyff035120-9518-11e6-8296-77df509974f6-07e6a044ad345982a4a810b004f431adcbef84a9.jpg', '1476784583', '好的', '0', '2016-10-18 09:56:23', '2016-10-18 09:56:23');
INSERT INTO `db_chat` VALUES ('65', '18672035432', null, '11', './uploads/jpeg/20161018/copyff035120-9518-11e6-8296-77df509974f6-07e6a044ad345982a4a810b004f431adcbef84a9.jpg', '1476784604', '测试', '0', '2016-10-18 09:56:44', '2016-10-18 09:56:44');

-- ----------------------------
-- Table structure for db_chat_log
-- ----------------------------
DROP TABLE IF EXISTS `db_chat_log`;
CREATE TABLE `db_chat_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `client_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_chat_log
-- ----------------------------

-- ----------------------------
-- Table structure for db_chat_win
-- ----------------------------
DROP TABLE IF EXISTS `db_chat_win`;
CREATE TABLE `db_chat_win` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT b'0',
  `created_at` datetime NOT NULL,
  `operuser` varchar(20) DEFAULT NULL,
  `bz` text,
  `djsj` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='中奖名单';

-- ----------------------------
-- Records of db_chat_win
-- ----------------------------
INSERT INTO `db_chat_win` VALUES ('1', '11111111111111', '\0', '2016-10-13 15:47:27', null, null, '2016-10-30 00:00:00', '2016-10-18 09:01:01');
INSERT INTO `db_chat_win` VALUES ('2', '2222222222222', '\0', '2016-10-14 15:47:40', null, '12', '2016-10-14 16:00:00', '2016-10-14 13:29:03');

-- ----------------------------
-- Table structure for db_config
-- ----------------------------
DROP TABLE IF EXISTS `db_config`;
CREATE TABLE `db_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci COMMENT '说明',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `db_config_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_config
-- ----------------------------
INSERT INTO `db_config` VALUES ('1', 'chat_view', '164', '直播页面浏览次数', '2016-10-04 18:48:40', '2016-10-04 18:48:56', '0');
INSERT INTO `db_config` VALUES ('2', 'chat_number', '100', '直播页面当前人数加成111111', '2016-10-04 18:50:28', '2016-10-14 15:02:37', '0');
INSERT INTO `db_config` VALUES ('9', 'poster', 'public/images/1.jpg', '直播视频缩略图', '2016-10-14 18:48:07', '2016-10-14 18:50:24', '0');
INSERT INTO `db_config` VALUES ('10', 'vurl', 'http://live.cjyun.org/video/s10070-eszh/index.m3u8', '视频流地址', '2016-10-14 18:51:17', '2016-10-18 18:00:49', '0');
INSERT INTO `db_config` VALUES ('8', 'title', '恩施电视台新闻直播', null, '2016-10-14 18:17:54', '2016-10-14 18:17:54', '0');

-- ----------------------------
-- Table structure for db_fields
-- ----------------------------
DROP TABLE IF EXISTS `db_fields`;
CREATE TABLE `db_fields` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '字段key',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '字段名称',
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '字段形式',
  `module` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '所属模块',
  `group` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '字段分组',
  `description` text COLLATE utf8_unicode_ci COMMENT '字段描述',
  `options` text COLLATE utf8_unicode_ci COMMENT '字段设置',
  `ext` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '字段扩展',
  `default` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '默认值',
  `add` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '[1]' COMMENT '新增权限',
  `edit` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '[1]' COMMENT '编辑权限',
  `visible` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '[1]' COMMENT '可见权限',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态，0：正常，1：锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_fields
-- ----------------------------
INSERT INTO `db_fields` VALUES ('1', 'link', '菜单地址', 'text', 'meuns', '字段分组', '菜单地址', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('2', 'title', '菜单标题', 'text', 'meuns', '字段分组', '菜单标题', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('3', 'icon', '菜单图标', 'text', 'meuns', '字段分组', '菜单图标', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('4', 'description', '菜单描述', 'textarea', 'meuns', '字段分组', '菜单描述', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('5', 'roles', '用户组', 'checkbox', 'meuns', '字段分组', '拥有权限的用户组', null, 'role', '[1]', '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('6', 'order', '排序', 'text', 'meuns', '字段分组', '排序', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('7', 'status', '状态', 'text', 'meuns', '字段分组', '状态', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('8', 'username', '用户名', 'text', 'users', '字段分组', '用户名', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('9', 'email', '邮箱', 'text', 'users', '字段分组', '邮箱', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('10', 'password', '用户密码', 'text', 'users', '字段分组', '用户密码', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('11', 'groups', '用户组', 'checkbox', 'users', '字段分组', '用户组', null, 'role', null, '[1]', '[1]', '[1]', '0', '1', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('12', 'status', '状态', 'select', 'users', '字段分组', '状态，0：正常，1：锁定', '[{\"title\":\"正常\",\"value\":0},{\"title\":\"锁定\",\"value\":1}]', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:52', null, null);
INSERT INTO `db_fields` VALUES ('13', 'name', '用户组名', 'text', 'roles', '字段分组', '用户组名', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('14', 'display_name', '显示名称', 'text', 'roles', '字段分组', '显示名称', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('15', 'thumb', '用户组头像', 'text', 'roles', '字段分组', '用户组头像', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('16', 'description', '用户组描述', 'text', 'roles', '字段分组', '用户组描述', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('17', 'status', '状态', 'select', 'roles', '字段分组', '状态，0：正常，1：锁定', '[{\"title\":\"正常\",\"value\":0},{\"title\":\"锁定\",\"value\":1}]', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('18', 'key', '字段key', 'text', 'fields', '字段分组', '字段key', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('19', 'name', '字段名称', 'text', 'fields', '字段分组', '字段名称', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('20', 'type', '字段形式', 'text', 'fields', '字段分组', '字段形式', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('21', 'module', '所属模块', 'text', 'fields', '字段分组', '所属模块', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('22', 'groups', '字段分组', 'text', 'fields', '字段分组', '字段分组', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('23', 'description', '字段描述', 'textarea', 'fields', '字段分组', '字段描述', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('24', 'options', '字段设置', 'textarea', 'fields', '字段分组', '字段设置', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('25', 'default', '默认值', 'textarea', 'fields', '字段分组', '默认值', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('26', 'order', '排序', 'text', 'fields', '字段分组', '排序', '', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('27', 'status', '状态', 'select', 'fields', '字段分组', '状态，0：正常，1：锁定', '[{\"title\":\"正常\",\"value\":0},{\"title\":\"锁定\",\"value\":1}]', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('28', 'add', '新增权限', 'checkbox', 'fields', '字段分组', '新增权限', null, 'role', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('29', 'edit', '编辑权限', 'checkbox', 'fields', '字段分组', '编辑权限', '[{\"title\":\"正常\",\"value\":0},{\"title\":\"锁定\",\"value\":1}]', 'role', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('30', 'visible', '可见权限', 'checkbox', 'fields', '字段分组', '可见权限', null, 'role', null, '[1]', '[1,2,3]', '[1]', '0', '0', '2016-09-24 12:20:53', '2016-10-18 11:14:24', null);
INSERT INTO `db_fields` VALUES ('31', 'name', '权限key', 'text', 'permissions', '字段分组', '权限key', null, '', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('32', 'display_name', '权限名称', 'text', 'permissions', '字段分组', '权限名称', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('33', 'group', '权限分组', 'text', 'permissions', '字段分组', '权限分组', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('34', 'roles', '用户组', 'checkbox', 'permissions', '字段分组', '用户组', null, 'role', '[1]', '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('35', 'description', '权限描述', 'text', 'permissions', '字段分组', '权限描述', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('36', 'title', '标题', 'text', 'article', '字段分组', '标题', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('37', 'keyword', '关键词', 'text', 'article', '字段分组', '关键词', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('38', 'category', '文章分类', 'select', 'article', '字段分组', '文章分类', null, 'category', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('39', 'tags', '文章标签', 'checkbox', 'article', '字段分组', '文章标签', null, 'tags', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('40', 'excerpt', '简介', 'textarea', 'article', '字段分组', '简介', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('41', 'thumb', '缩略图', 'upload', 'article', '字段分组', '缩略图', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('42', 'content', '内容', 'editer', 'article', '字段分组', '内容', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('43', 'order', '排序', 'text', 'article', '字段分组', '排序', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('44', 'name', '分类名称', 'text', 'category', '字段分组', '分类名称', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('45', 'ico', '分类图标', 'text', 'category', '字段分组', '分类图标', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('46', 'description', '分类描述', 'textarea', 'category', '字段分组', '分类描述', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('47', 'pid', '上级分类', 'select', 'category', '字段分组', '上级分类', null, 'category', null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('48', 'taxonomy', '所属分类法', 'select', 'category', '字段分组', '所属分类法', '[{\"title\":\"栏目分类\",\"value\":\"category\"},{\"title\":\"标签tags\",\"value\":\"tags\"}]', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('49', 'status', '状态', 'select', 'category', '字段分组', '状态', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('50', 'content', '评论内容', 'textarea', 'chat', '字段分组', '评论内容', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('51', 'username', '用户名', 'text', 'chat', '字段分组', '用户名', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('52', 'user_id', '用户ID', 'text', 'chat', '字段分组', '用户ID', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('53', 'head_img', '用户头像', 'text', 'chat', '字段分组', '用户头像', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('54', 'time', '发布时间', 'text', 'chat', '字段分组', '发布时间', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('55', 'title', '话题标题', 'text', 'topic', '字段分组', '话题标题', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('56', 'content', '话题内容', 'textarea', 'topic', '字段分组', '话题内容', null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('57', 'status', '状态', 'select', 'topic', '字段分组', '状态，0：正常，1：锁定', '[{\"title\":\"正常\",\"value\":0},{\"title\":\"锁定\",\"value\":1}]', null, null, '[1]', '[1]', '[1]', '0', '0', '2016-09-24 12:20:53', null, null);
INSERT INTO `db_fields` VALUES ('58', 'name', '设置名称', 'text', 'config', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-10-04 18:46:01', '2016-10-04 18:46:01', null);
INSERT INTO `db_fields` VALUES ('59', 'value', '设置值', 'text', 'config', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-10-04 18:46:21', '2016-10-04 18:46:21', null);
INSERT INTO `db_fields` VALUES ('60', 'description', '设置说明', 'textarea', 'config', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', '2016-10-04 18:47:38', '2016-10-04 18:47:38', null);
INSERT INTO `db_fields` VALUES ('61', 'phone', '中奖用户名', 'text', 'chat_win', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', null, null, null);
INSERT INTO `db_fields` VALUES ('62', 'status', '是否领奖', 'select', 'chat_win', null, null, '[{\"title\":\"未领奖\",\"value\":0},{\"title\":\"已领奖\",\"value\":1}]', null, null, '[1]', '[1]', '[1]', '0', '0', null, null, null);
INSERT INTO `db_fields` VALUES ('63', 'operuser', '操作人员', 'text', 'chat_win', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', null, null, null);
INSERT INTO `db_fields` VALUES ('64', 'bz', '备注', 'textarea', 'chat_win', null, null, null, null, null, '[1]', '[1]', '[1]', '10', '0', null, null, null);
INSERT INTO `db_fields` VALUES ('65', 'djsj', '领奖时间', 'date', 'chat_win', null, null, null, null, null, '[1]', '[1]', '[1]', '0', '0', null, null, null);

-- ----------------------------
-- Table structure for db_meun
-- ----------------------------
DROP TABLE IF EXISTS `db_meun`;
CREATE TABLE `db_meun` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '菜单地址',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '菜单标题',
  `icon` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '菜单图标',
  `description` text COLLATE utf8_unicode_ci COMMENT '菜单描述',
  `roles` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '[1]' COMMENT '拥有权限的用户组',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态，0：正常，1：锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `meun_link_unique` (`link`),
  UNIQUE KEY `meun_title_unique` (`title`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_meun
-- ----------------------------
INSERT INTO `db_meun` VALUES ('1', 'index', '首页', 'fa fa-home', '首页', '[1,2]', '0', '0', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('13', 'api/chat_win', '获奖名单', 'fa fa-user', '获奖名单', '[1,2]', '0', '0', '2016-10-14 19:14:03', '2016-10-18 17:16:58');
INSERT INTO `db_meun` VALUES ('3', 'api/article', '文章管理', 'fa fa-user', '文章管理', '[1,2]', '0', '1', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('4', 'api/category', '分类管理', 'fa fa-user', '分类管理', '[1,2]', '0', '1', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('5', 'api/topic', '直播话题', 'fa fa-th-list', '直播话题', '[1]', '0', '0', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('6', 'api/chat', '直播评论', 'fa fa-th-list', '直播评论', '[1]', '0', '0', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('7', 'api/fields', '字段管理', 'fa fa-file-text-o', '字段管理', '[1]', '0', '1', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('8', 'api/meuns', '菜单管理', 'fa fa-th-list', '菜单管理', '[1]', '0', '1', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('9', 'api/permissions', '权限管理', 'fa fa-unlock-alt', '权限管理', '[1]', '0', '0', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('10', 'api/roles', '用户组管理', 'fa fa-users', '用户组管理', '[1]', '0', '1', '2016-09-24 12:20:52', null);
INSERT INTO `db_meun` VALUES ('11', 'api/users', '用户管理', 'fa fa-user', '用户管理', '[1]', '0', '1', '2016-09-24 12:20:52', '2016-10-17 15:45:19');
INSERT INTO `db_meun` VALUES ('12', 'api/config', '系统设置', 'fa fa-user', '系统设置', '[1]', '0', '0', '2016-09-24 12:20:52', null);

-- ----------------------------
-- Table structure for db_permissions
-- ----------------------------
DROP TABLE IF EXISTS `db_permissions`;
CREATE TABLE `db_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `module` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限名',
  `action` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限显示名称',
  `group` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '权限分组',
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '权限描述',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_permissions
-- ----------------------------
INSERT INTO `db_permissions` VALUES ('26', null, 'getconfig', null, '系统设置列表', '系统设置', '0', '系统设置列表', '2016-10-18 17:58:55', '2016-10-18 17:59:01');
INSERT INTO `db_permissions` VALUES ('27', null, 'getconfig/add', null, '新增设置', '系统设置', '0', '新增设置', '2016-10-18 17:59:28', '2016-10-18 17:59:35');
INSERT INTO `db_permissions` VALUES ('28', null, 'getconfig/detail', null, '查看设置', '系统设置', '0', '查看设置', '2016-10-18 18:00:00', '2016-10-18 18:00:06');
INSERT INTO `db_permissions` VALUES ('29', null, 'postconfig/detail', null, '编辑设置', '系统设置', '0', '编辑设置', '2016-10-18 18:00:28', '2016-10-18 18:00:35');
INSERT INTO `db_permissions` VALUES ('25', null, 'getchat_win', null, '获奖名单列表', '获奖名单', '0', '获奖名单列表', '2016-10-18 17:58:09', '2016-10-18 17:58:15');
INSERT INTO `db_permissions` VALUES ('12', null, 'getchat', null, '直播评论列表', '评论管理', '0', '直播列表', null, '2016-10-18 17:40:15');
INSERT INTO `db_permissions` VALUES ('13', null, 'getpermissions', null, '权限列表', '权限管理', '0', '查看权限列表', '2016-10-17 13:29:52', '2016-10-17 13:29:52');
INSERT INTO `db_permissions` VALUES ('14', null, 'getpermissions/detail', null, '权限详情', '权限管理', '0', '权限详情', null, '2016-10-18 17:38:15');
INSERT INTO `db_permissions` VALUES ('15', null, 'getpermissions/add', null, '新增权限', '权限管理', '0', '新增权限', null, '2016-10-18 17:38:03');
INSERT INTO `db_permissions` VALUES ('16', null, 'postpermissions/detail', null, '编辑权限', '权限管理', '0', '编辑权限', '2016-10-17 14:21:43', '2016-10-18 17:37:50');
INSERT INTO `db_permissions` VALUES ('17', null, 'getpermissions/delete', null, '删除权限', '权限管理', '0', '删除权限', '2016-10-17 14:23:06', '2016-10-18 17:37:41');
INSERT INTO `db_permissions` VALUES ('18', null, 'getroles', null, '用户组列表', '用户组管理', '0', '用户组列表', '2016-10-17 14:24:48', '2016-10-17 15:42:15');
INSERT INTO `db_permissions` VALUES ('19', null, 'gettopic', null, '直播话题列表', '直播话题', '0', '直播话题列表', '2016-10-18 17:30:46', '2016-10-18 17:31:31');
INSERT INTO `db_permissions` VALUES ('20', null, 'gettopic/add', null, '新增主题', '直播主题', '0', '新增主题', '2016-10-18 17:33:08', '2016-10-18 17:37:04');
INSERT INTO `db_permissions` VALUES ('21', null, 'gettopic/detail', null, '查看主题详情', '直播主题', '0', '查看主题详情', '2016-10-18 17:34:11', '2016-10-18 17:34:17');
INSERT INTO `db_permissions` VALUES ('22', null, 'posttopic/detail', null, '编辑直播主题', '直播主题', '0', '编辑直播主题', '2016-10-18 17:34:49', '2016-10-18 17:34:59');
INSERT INTO `db_permissions` VALUES ('23', null, 'gettopic/delete', null, '删除直播主题', '直播主题', '0', '删除直播主题', '2016-10-18 17:35:49', '2016-10-18 17:35:54');
INSERT INTO `db_permissions` VALUES ('24', null, 'getchat/delete', null, '删除评论', '评论管理', '0', '删除评论', '2016-10-18 17:39:27', '2016-10-18 17:39:33');

-- ----------------------------
-- Table structure for db_roles
-- ----------------------------
DROP TABLE IF EXISTS `db_roles`;
CREATE TABLE `db_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户组名',
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '显示名称',
  `thumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '用户组头像',
  `description` text COLLATE utf8_unicode_ci COMMENT '用户组描述',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态，0：正常，1：锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_roles
-- ----------------------------
INSERT INTO `db_roles` VALUES ('1', 'admin', '管理员', '', '系统管理员', '0', '2016-09-24 12:20:53', null);
INSERT INTO `db_roles` VALUES ('2', 'editor', '编辑', '', '编辑', '0', '2016-09-24 12:20:53', null);
INSERT INTO `db_roles` VALUES ('3', 'reader', '读者', '', '普通用户', '0', '2016-09-24 12:20:53', null);

-- ----------------------------
-- Table structure for db_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `db_role_permission`;
CREATE TABLE `db_role_permission` (
  `id` int(10) unsigned NOT NULL,
  `permission_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`id`),
  KEY `role_permission_role_id_foreign` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_role_permission
-- ----------------------------
INSERT INTO `db_role_permission` VALUES ('1', '1');
INSERT INTO `db_role_permission` VALUES ('2', '1');
INSERT INTO `db_role_permission` VALUES ('3', '1');
INSERT INTO `db_role_permission` VALUES ('2', '2');
INSERT INTO `db_role_permission` VALUES ('3', '2');
INSERT INTO `db_role_permission` VALUES ('2', '3');
INSERT INTO `db_role_permission` VALUES ('2', '4');
INSERT INTO `db_role_permission` VALUES ('3', '4');
INSERT INTO `db_role_permission` VALUES ('2', '5');
INSERT INTO `db_role_permission` VALUES ('2', '6');
INSERT INTO `db_role_permission` VALUES ('2', '7');
INSERT INTO `db_role_permission` VALUES ('2', '8');
INSERT INTO `db_role_permission` VALUES ('2', '9');
INSERT INTO `db_role_permission` VALUES ('2', '10');
INSERT INTO `db_role_permission` VALUES ('2', '11');
INSERT INTO `db_role_permission` VALUES ('1', '12');
INSERT INTO `db_role_permission` VALUES ('2', '12');
INSERT INTO `db_role_permission` VALUES ('3', '13');
INSERT INTO `db_role_permission` VALUES ('1', '14');
INSERT INTO `db_role_permission` VALUES ('1', '15');
INSERT INTO `db_role_permission` VALUES ('1', '16');
INSERT INTO `db_role_permission` VALUES ('1', '17');
INSERT INTO `db_role_permission` VALUES ('3', '17');
INSERT INTO `db_role_permission` VALUES ('1', '19');
INSERT INTO `db_role_permission` VALUES ('2', '19');
INSERT INTO `db_role_permission` VALUES ('1', '20');
INSERT INTO `db_role_permission` VALUES ('2', '20');
INSERT INTO `db_role_permission` VALUES ('1', '21');
INSERT INTO `db_role_permission` VALUES ('2', '21');
INSERT INTO `db_role_permission` VALUES ('1', '22');
INSERT INTO `db_role_permission` VALUES ('2', '22');
INSERT INTO `db_role_permission` VALUES ('1', '23');
INSERT INTO `db_role_permission` VALUES ('2', '23');
INSERT INTO `db_role_permission` VALUES ('1', '24');
INSERT INTO `db_role_permission` VALUES ('2', '24');
INSERT INTO `db_role_permission` VALUES ('1', '25');
INSERT INTO `db_role_permission` VALUES ('2', '25');
INSERT INTO `db_role_permission` VALUES ('1', '26');
INSERT INTO `db_role_permission` VALUES ('2', '26');
INSERT INTO `db_role_permission` VALUES ('1', '27');
INSERT INTO `db_role_permission` VALUES ('2', '27');
INSERT INTO `db_role_permission` VALUES ('1', '28');
INSERT INTO `db_role_permission` VALUES ('2', '28');
INSERT INTO `db_role_permission` VALUES ('1', '29');
INSERT INTO `db_role_permission` VALUES ('2', '29');

-- ----------------------------
-- Table structure for db_role_user
-- ----------------------------
DROP TABLE IF EXISTS `db_role_user`;
CREATE TABLE `db_role_user` (
  `user_id` int(10) unsigned NOT NULL,
  `id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`id`),
  KEY `role_user_role_id_foreign` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_role_user
-- ----------------------------
INSERT INTO `db_role_user` VALUES ('1', '1');
INSERT INTO `db_role_user` VALUES ('2', '2');

-- ----------------------------
-- Table structure for db_topic
-- ----------------------------
DROP TABLE IF EXISTS `db_topic`;
CREATE TABLE `db_topic` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态，0：正常，1：锁定',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_topic
-- ----------------------------
INSERT INTO `db_topic` VALUES ('5', '恩施电视台新闻直播', '恩施电视台新闻直播', '0', '2016-10-18 17:52:22', '2016-10-18 17:52:22');

-- ----------------------------
-- Table structure for db_users
-- ----------------------------
DROP TABLE IF EXISTS `db_users`;
CREATE TABLE `db_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role` tinyint(1) NOT NULL DEFAULT '0' COMMENT '用户角色，0：普通用户，1：超级管理员，2：普通管理员',
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码',
  `realname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '真实姓名',
  `china_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '身份证号码',
  `head_img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '用户头像',
  `office_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '办公号码',
  `mobile_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '手机号码',
  `qq` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'QQ号码',
  `sex` tinyint(1) NOT NULL DEFAULT '1' COMMENT '性别，0：男，1：女',
  `score` int(11) NOT NULL DEFAULT '0' COMMENT '用户积分',
  `job` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '职位职称',
  `team` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '部门',
  `company_id` int(11) NOT NULL DEFAULT '0' COMMENT '单位，0：系统人员',
  `remarks` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '备注',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '用户状态,0:正常,1:锁定',
  `login_totals` int(11) NOT NULL DEFAULT '0' COMMENT '累计登录次数',
  `reg_ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0.0.0.0' COMMENT '注册IP',
  `last_login_ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0.0.0.0' COMMENT '最后登录IP',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '操作人员ID，0：自己注册用户',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_name_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_users
-- ----------------------------
INSERT INTO `db_users` VALUES ('11', '0', '18672035432', null, 'b7f8ccfc1b1b5d6b1a6249596275dc7fcd532ad4', '我是好人', null, './uploads/jpeg/20161018/copyff035120-9518-11e6-8296-77df509974f6-07e6a044ad345982a4a810b004f431adcbef84a9.jpg', null, null, null, '1', '0', null, null, '0', null, '0', '0', '0.0.0.0', '0.0.0.0', '0', null, '2016-10-18 17:56:18', '2016-10-18 17:56:18');
INSERT INTO `db_users` VALUES ('2', '0', 'tianez', '', 'b7f8ccfc1b1b5d6b1a6249596275dc7fcd532ad4', null, null, null, null, null, null, '1', '0', null, null, '0', null, '0', '0', '0.0.0.0', '0.0.0.0', '0', null, '2016-10-18 17:01:55', '2016-10-18 17:01:55');
INSERT INTO `db_users` VALUES ('1', '0', 'admin', null, 'b7f8ccfc1b1b5d6b1a6249596275dc7fcd532ad4', null, null, './uploads/jpeg/20161013/P61011-174032(1).jpg', null, null, null, '1', '0', null, null, '0', null, '0', '0', '0.0.0.0', '0.0.0.0', '0', null, '2016-10-13 18:04:22', '2016-10-13 18:04:22');

-- ----------------------------
-- Table structure for db_users_social
-- ----------------------------
DROP TABLE IF EXISTS `db_users_social`;
CREATE TABLE `db_users_social` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '本地账号id',
  `openid` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '第三方openid',
  `nickname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '昵称',
  `sex` tinyint(1) NOT NULL DEFAULT '1' COMMENT '性别，0：男，1：女',
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '所在城市',
  `province` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '所在省份',
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '国家',
  `headimgurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '头像',
  `subscribe_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '关注时间',
  `plat` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '所属第三方平台',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态,1:已关注,0:已取消关注',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of db_users_social
-- ----------------------------

-- ----------------------------
-- View structure for sp_role_permissions
-- ----------------------------
DROP VIEW IF EXISTS `sp_role_permissions`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `sp_role_permissions` AS SELECT
db_permissions.id,
db_permissions.`name`,
db_permissions.display_name,
db_permissions.group,
db_role_permission.id AS role_id,
db_role_permission.permission_id,
db_roles.`name` AS role,
db_roles.display_name AS role_name,
db_permissions.module,
db_permissions.action
FROM
db_permissions ,
db_role_permission ,
db_roles
WHERE
db_permissions.id = db_role_permission.permission_id AND
db_role_permission.id = db_roles.id AND
db_permissions.`status` = 0 AND
db_roles.`status` = 0 ;
