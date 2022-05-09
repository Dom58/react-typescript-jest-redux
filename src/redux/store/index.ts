import { 
	createStore,
	applyMiddleware 
} from 'redux';
// import { configureStore } from'@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {};

export const store = createStore(
	reducers, 
	initialState, 
	applyMiddleware(thunk)
);

// @reduxjs/toolkit
