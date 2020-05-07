import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { tableReducer } from '../reducer/table-reducer';

const combinedReducer = combineReducers({
    table : tableReducer,
});

export default createStore(combinedReducer, applyMiddleware(thunk));
