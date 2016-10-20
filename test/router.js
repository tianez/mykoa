'use strict'

import {
    syncHistoryWithStore
} from 'react-router-redux'
const {
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Redirect,
    hashHistory,
    browserHistory
} = ReactRouter
const history = syncHistoryWithStore(hashHistory, store)

const {
    Home,
    Login,
    TestAdd,
    TestDetail
} = require('./pages')

function onEnter(nextState, replace) {
    let pathname = nextState.location.pathname
    let token = localStorage.token
    if (!token || token == 'null') {
        token = false
    } else {
        token = true
    }
    console.log(token);
    if (!token && pathname !== 'login' && pathname !== '/login') {
        Rd.message('你还没有登录，请先登录！')
        replace({
            pathname: '/login'
        })
    } else if (token && (pathname == 'login' || pathname == '/login')) {
        replace({
            pathname: '/'
        })
    }
}

const routers = (
    React.createElement(Router, {
            history: history
        },
        React.createElement(Route, {
            path: "/",
            component: Home,
            onEnter: onEnter
        }),
        React.createElement(Route, {
            path: "add",
            component: TestAdd
        }),
        React.createElement(Route, {
            path: "api/tests/:id",
            component: TestDetail
        }),
        React.createElement(Route, {
            path: "login",
            component: Login,
            onEnter: onEnter
        })
    )
)

module.exports = routers