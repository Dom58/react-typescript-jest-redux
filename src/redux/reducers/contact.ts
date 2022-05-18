import { ActionContactType } from '../types';

interface IContactCreateRequest {
  type: ActionContactType.SEND_FEEDBACK;
  payload: object;
}
interface IContactSuccess {
  type: ActionContactType.SEND_FEEDBACK_SUCCESS;
  payload: object;
}
interface IContactFailure {
  type: ActionContactType.SEND_FEEDBACK_FAILURE;
  payload: object;
}

const initialState = {
  sendFeedbackData: null,
  sendFeedbackSuccess: null,
  sendFeedbackFailure: null,
  feedbackLoading: false
};

export type ActionContact = IContactCreateRequest | IContactSuccess | IContactFailure;

export default function (state = initialState, action: ActionContact) {
  switch (action.type) {
    case ActionContactType.SEND_FEEDBACK:
      return {
        ...state,
        sendFeedbackData: action.payload,
        feedbackLoading: true
      };
    case ActionContactType.SEND_FEEDBACK_SUCCESS:
      return {
        ...state,
        sendFeedbackSuccess: action.payload,
        sendFeedbackFailure: null,
        sendFeedbackData: null,
        feedbackLoading: false
      };
    case ActionContactType.SEND_FEEDBACK_FAILURE:
      return {
        ...state,
        sendFeedbackSuccess: null,
        sendFeedbackData: null,
        sendFeedbackFailure: action.payload,
        feedbackLoading: false
      };
    default:
      return state; //or return initialState
  }
}
