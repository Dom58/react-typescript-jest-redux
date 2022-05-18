// import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import calculator from './calculator';
import contacts from './contact';
import rooms from './rooms';

export default combineReducers({
  calculator,
  contacts,
  rooms
});

export type State = ReturnType<typeof combineReducers>;
