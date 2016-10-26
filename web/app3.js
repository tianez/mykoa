require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
import {
    Provider,
    connect
} from 'react-redux'
const App = require('./containers/App');

import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducer'

import DevTools from './containers/dev';
const enhancer = compose(

  DevTools.instrument()
)
let createStoreWithLog = applyMiddleware(thunkMiddleware)(createStore);
    window.store = createStoreWithLog(
        rootReducer,
        enhancer
    )
    store.subscribe(() => {
    let state = store.getState()
    console.log(state);
    window.document.title = state.config.title
})
  if (module.hot) {
    module.hot.accept('./redux/reducer', () => {
      const nextReducer = require('./redux/reducer').default
      store.replaceReducer(nextReducer)
    })
  }

window.connect = connect
window.Rd = require('./redux/actions')
const routers = require('./lib/router')
render(
  <Provider store={store}>
  <div>
       {routers}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
