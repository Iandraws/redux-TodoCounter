import {combineReducers} from 'redux';
import accountreducers from './accountreducers'


const reducers =combineReducers({
    account: accountreducers,
})

export default reducers;