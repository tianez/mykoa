const db = require('./db');

module.exports = db.defineModel('user2s', {
    user_name: db.STRING(100)
});