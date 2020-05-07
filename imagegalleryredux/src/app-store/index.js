import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { imagegalleryreducer } from '../reducer/image-gallery-reducer';

const combinedReducer = combineReducers({
  imageRed : imagegalleryreducer,
});
export const AppStore = createStore(combinedReducer, applyMiddleware(thunk));

