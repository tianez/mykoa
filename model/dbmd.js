const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync('./model');

let js_files = files.filter((f) => {
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    if (name !== 'db' && name !== 'dbmd') {
        module.exports[name] = require('../model/' + f);
    };
}

module.exports.sync = () => {
    db.sync();
};