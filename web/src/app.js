'use strict'

// window.React = require('react');
import { render } from 'react-dom';

require('./lib/global')
import './less/style.less'

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import {
    Provider,
    connect
} from 'react-redux'
window.connect = connect

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './redux/reducer'
import DevTools from './lib/DevTools';

const enhancer = compose(
    DevTools.instrument()
)

window.store = createStore(
    rootReducer,
    enhancer,
    // applyMiddleware(thunkMiddleware, createLogger())
)

if (module.hot) {
    module.hot.accept('./redux/reducer', () => {
        const nextReducer = require('./redux/reducer').default
        store.replaceReducer(nextReducer)
    })
}

window.Rd = require('./redux/actions')
const router = require('./lib/router')
render(
    React.createElement(Provider, {
        store: store
    },
        React.createElement('div', {},
            router,
            React.createElement(DevTools)
        )
    ),
    document.getElementById('app')
)