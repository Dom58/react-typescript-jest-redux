import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionContactType } from '../types';
import { ActionContact } from '../reducers/contact';

const { REACT_APP_BACKEND } = process.env;

export const sendFeedback = (data: object) => {
  return (dispatch: Dispatch<ActionContact>) => {
    dispatch({ type: ActionContactType.SEND_FEEDBACK, payload: data });
    axios
      .post(`${REACT_APP_BACKEND}/api/feedbacks/create`, data)
      .then((res) => {
        dispatch({ type: ActionContactType.SEND_FEEDBACK_SUCCESS, payload: res.data.message });
      })
      .catch((err) => {
        dispatch({
          type: ActionContactType.SEND_FEEDBACK_FAILURE,
          payload: err.response ? err.response.data.error : null
        });
      });
  };
};
