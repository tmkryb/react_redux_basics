import { combineReducers } from 'redux'
import simpleReducer from './reducers/simpleReducer'
import simpleReducer2 from './reducers/simpleReducer2'


export default combineReducers({
    simpleReducer,
    simpleReducer2
});