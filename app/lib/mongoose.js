"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/koa');
var Schema = mongoose.Schema;

var exports = {};

var userSchema = new Schema({
    username: String,
    // nicename: String,
    nicename: {
        type: String,
        default: 'username'
    },
    password: String,
    role: String,
    email: String,
    head: String,
    avatar: String,
    description: String,
    web: String,
    regtime: {},
    power: []
}, {
    collection: 'users'
});

var postsSchema = new Schema({
    title: String,
    content: String,
    add_t: {},
    update_t: {}
}, {
    collection: 'posts'
});

var defaultSchema = new Schema({
    title: String
});
// module.exports = mongoose.model('user', userSchema);

module.exports = {
    users: mongoose.model('users', userSchema),
    posts: mongoose.model('posts', postsSchema),
    default: mongoose.model('default', defaultSchema),
}

// module.exports = function (table) {
//     switch (table) {
//         case 'users':
//             var exports = mongoose.model(table, userSchema);
//             break;
//         case 'posts':
//             var exports = mongoose.model(table, postsSchema);
//             break;
//         default:
//             var exports = mongoose.model(table, defaultSchema);
//     }
//     return exports;
// }