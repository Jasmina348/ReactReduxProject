import { applyMiddleware,createStore, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducers'

const initialState = {};
const middleware = [thunk]

const store =  createStore(
    rootReducer,
     initialState,
     applyMiddleware(...middleware))
export default store;