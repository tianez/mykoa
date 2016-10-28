'use strict'
require("babel-polyfill");
var register = require('babel-core/register');


register({
    presets: ['stage-3']
});

require('./socket');