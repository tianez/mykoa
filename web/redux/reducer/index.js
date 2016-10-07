'use strict'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { config } from './config'
import { user } from './user'
import { comments } from './comments'
import { pagedata } from './pagedata'
import { message } from './message'

const reducer = combineReducers({
    config,
    user,
    comments,
    pagedata,
    message,
    routing: routerReducer
})

export default reducer;