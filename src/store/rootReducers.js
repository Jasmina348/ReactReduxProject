import {combineReducers} from 'redux'
import postReducer from './posts/reducers'

export default combineReducers ({
    posts: postReducer
});