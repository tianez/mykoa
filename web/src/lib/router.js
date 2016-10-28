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
    // } = require('react-router')
} = ReactRouter

const history = syncHistoryWithStore(hashHistory, store)

const {
    Home,
    Login,
    Profile,
    Nomatch
} = require('../pages')

const Layout = require('../layout/layout')

const routers = (
    React.createElement(Router, {
            history: history
        },
        React.createElement(Route, {
                path: "/",
                component: Layout,
                onEnter: onEnter
            },
            React.createElement(IndexRedirect, {
                to: 'index'
            }),
            React.createElement(Route, {
                path: "index",
                component: Home
            }),
            React.createElement(Route, {
                path: "profile",
                component: Profile
            })
        ),
        React.createElement(Route, {
            path: "login",
            component: Login,
            onEnter: onEnter
        }),
        React.createElement(Route, {
            path: "*",
            component: Nomatch
        })
    )
)

module.exports = routers

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