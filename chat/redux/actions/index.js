'use strict'

function config(name, value) {
    store.dispatch({
        type: 'config',
        name,
        value
    });
}

function comment(comment) {
    comment.type = 'comment'
    store.dispatch(comment);
}

function comments(comments) {
    store.dispatch({
        type: 'comments',
        comments
    });
}

function today(comment) {
    comment.type = 'today'
    store.dispatch(comment);
}

export function todays(comments) {
    store.dispatch({
        type: 'todays',
        comments
    });
}

export function video(comments) {
    store.dispatch({
        type: 'video',
        comments
    });
}

export function message(data) {
    Rd.config('message', {
        msg: data,
        show: 1
    })
    setTimeout(function () {
        Rd.config('message', {
            msg: '',
            show: 0
        })
    }, 3000)
}

module.exports = {
    config: config,
    comment: comment,
    comments: comments,
    today: today,
    todays: todays,
    video: video,
    message: message
}