require('fetch-ie8');



const React = require('react');

const render = require('react-dom').render;

const Provider = require('react-redux').Provider;

const App = require('./containers/App');

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import DevTools from './DevTools';

const enhancer = compose(
  DevTools.instrument()
)

const store = createStore(
  rootReducer,
  enhancer,
  applyMiddleware(thunkMiddleware, createLogger())
)
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  })
}

render(
  <Provider store={store}>
  <div>
  <App />
  <DevTools />
  </div>
  </Provider>,
  document.getElementById('app')
)