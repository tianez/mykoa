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
    Home
} = require('./pages')

function onEnter(nextState, replace) {
    let pathname = nextState.location.pathname
    let state = store.getState()
    let user = state.user.user_name
    if (!user && pathname !== 'login' && pathname !== '/login') {
        Rd.message('你还没有登录，请先登录！')
        replace({
            pathname: '/login'
        })
    } else if (user && (pathname == 'login' || pathname == '/login')) {
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
            component: Home
        })
    )
)

module.exports = routers