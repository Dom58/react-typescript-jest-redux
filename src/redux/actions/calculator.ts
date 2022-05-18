import { Dispatch } from 'redux';
import { ActionType } from '../types';
import { Action } from '../reducers/calculator';

export const add = (result: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CREATE_REQUEST });

    setTimeout(() => {
      dispatch({
        type: ActionType.CREATE_ADDITION,
        payload: result.numb1 + result.numb2
      });
    }, 100);
  };
};

export const sub = (result: any) => {
  return (dispatch: Dispatch<Action>) => {
    setTimeout(() => {
      dispatch({
        type: ActionType.CREATE_SUBSTRACTION,
        payload: result.numb1 - result.numb2
      });
    }, 100);
  };
};

export const mult = (result: any) => {
  return (dispatch: Dispatch<Action>) => {
    setTimeout(() => {
      dispatch({
        type: ActionType.CREATE_MULTIPLICATION,
        payload: result.numb1 * result.numb2
      });
    }, 100);
  };
};

export const div = (result: any) => {
  return (dispatch: Dispatch<Action>) => {
    setTimeout(() => {
      dispatch({
        type: ActionType.CREATE_DIVISION,
        payload: result.numb1 / result.numb2
      });
    }, 100);
  };
};
