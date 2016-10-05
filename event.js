'use strict'

const events = require('events')
global.event = new events.EventEmitter();

// global.event.on('some_event', function (data) {
//     console.log('some_event 事件触发' + data);
// });

// global.event.on('chat', function (data) {
//     console.log('chat 事件触发' + data);
// });