'use strict'

function config(name, value) {
    store.dispatch({ type: 'config', name, value });
}

function comment(comment) {
    comment.type = 'comment'
    store.dispatch(comment);
}

function comments(comments) {
    store.dispatch({ type: 'comments', comments });
}

function today(comment) {
    comment.type = 'today'
    store.dispatch(comment);
}

export function todays(comments) {
    store.dispatch({ type: 'todays', comments });
}

export function yesterday(comments) {
    store.dispatch({ type: 'yesterday', comments });
}
module.exports = {
    config: config,
    comment: comment,
    comments: comments,
    today: today,
    todays: todays,
    yesterday: yesterday
}