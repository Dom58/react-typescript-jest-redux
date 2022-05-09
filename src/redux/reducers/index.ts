import { combineReducers } from 'redux';
import calculator from './calculator';
import contacts from './contact';

export default combineReducers({
	calculator,
	contacts
});

export type State = ReturnType<typeof combineReducers>
