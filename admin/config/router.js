'use strict'

import { syncHistoryWithStore } from 'react-router-redux'
const { Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory, browserHistory } = ReactRouter
const history = syncHistoryWithStore(hashHistory, store)

const Layout = require('../layout/layout')
const { Nomatch, Home, Drag, ApiCloudsIndex, ApiClouds, ApiCloud, Pages, Page, Login, Logout, Import } = require('../pages')

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
    React.createElement(Router, { history: history },
        React.createElement(Route, { path: "/", component: Layout, onEnter: onEnter},
            React.createElement(IndexRedirect, { to: 'index' }),
            React.createElement(Route, { path: "index", component: Home }),
            React.createElement(Route, { path: "import", component: Import}),
            React.createElement(Route, { path: "drag", component: Drag }),
            React.createElement(Route, { path: "apicloud" },
                React.createElement(IndexRoute, { component: ApiCloudsIndex }),
                React.createElement(Route, { path: ":clouds" },
                    React.createElement(IndexRoute, { component: ApiClouds }),
                    React.createElement(Route, { path: ":articleId", component: ApiCloud })
                )
            ),
            React.createElement(Route, { path: "api", },
                React.createElement(IndexRoute, { component: ApiCloudsIndex }),
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