'use strict'

import { syncHistoryWithStore } from 'react-router-redux'
const { Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory, browserHistory } = ReactRouter
const history = syncHistoryWithStore(hashHistory, store)

const Layout = require('../layout/layout')
const { Nomatch, Home, Pages, Page, Login, Logout, TestAdd, TestDetail } = require('../pages')

function onEnter(nextState, replace) {
    let pathname = nextState.location.pathname
    let token = localStorage.token
    if(!token || token=='null'){
        token = false
    }else{
        token = true
    }
    console.log(token);
    if ( !token && pathname !== 'login' && pathname !== '/login') {
        Rd.message('你还没有登录，请先登录！')
        console.log('1');
        replace({
            pathname: '/login'
        })
    } else if (token && (pathname == 'login' || pathname == '/login')) {
        console.log('2');
        replace({
            pathname: '/'
        })
    }
}

const routers = (
    React.createElement(Router, { history: history },
        React.createElement(Route, { path: "/", component: Layout, onEnter: onEnter},
            React.createElement(IndexRedirect, { to: 'index' }),
            React.createElement(Route, { path: "index", component: Home }),
            React.createElement(Route, { path: "api", },
                React.createElement(Route, { path: "tests/add", component: TestAdd }),
                React.createElement(Route, { path: "tests/:id", component: TestDetail }),
                React.createElement(Redirect, { from: ':pages', to: ':pages/index' }),
                React.createElement(Route, { path: ":pages" },
                    React.createElement(Route, { path: "index", component: Pages }),
                    React.createElement(Route, { path: ":page", component: Page })
                )
            )
        ),
        React.createElement(Route, { path: "login", component: Login, onEnter: onEnter }),
        React.createElement(Route, { path: "logout", component: Logout }),
        React.createElement(Route, { path: "*", component: Nomatch })
    )
)

module.exports = routers