import { ActionRoomsType } from '../types';

interface IRequestRooms {
  type: ActionRoomsType.REQUEST_GET_ROOMS;
  payload: object;
}
interface IRequestRoomsSuccess {
  type: ActionRoomsType.GET_ROOMS_SUCCESS;
  payload: object;
}
interface IRequestRoomsFailure {
  type: ActionRoomsType.GET_ROOMS_FAILED;
  payload: object;
}

interface IRequestRoom {
  type: ActionRoomsType.GET_SINGLE_ROOM_SUCCESS;
  payload: object;
}

const initialState = {
  success: false,
  roomsError: '',
  roomLoading: null,
  rooms: null,
  room: null
};

export type ActionRooms =
  | IRequestRooms
  | IRequestRoomsSuccess
  | IRequestRoomsFailure
  | IRequestRoom;

export default function (state = initialState, action: ActionRooms) {
  switch (action.type) {
    case ActionRoomsType.REQUEST_GET_ROOMS:
      return {
        ...state,
        roomLoading: true
      };
    case ActionRoomsType.GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
        roomsError: null,
        roomLoading: false
      };
    case ActionRoomsType.GET_ROOMS_FAILED:
      return {
        ...state,
        rooms: null,
        roomsError: action.payload,
        roomLoading: false
      };
    case ActionRoomsType.GET_SINGLE_ROOM_SUCCESS:
      return {
        ...state,
        room: action.payload,
        roomLoading: false
      };
    default:
      return state; //or return initialState
  }
}
