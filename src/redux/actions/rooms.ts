import { Dispatch } from 'redux';
import axios from 'axios';
import { ActionRooms } from '../reducers/rooms';
import { ActionRoomsType } from '../types';

const { REACT_APP_BACKEND } = process.env;

export const fetchHotelRooms = () => {
    return (dispatch: Dispatch<ActionRooms>) => {
        dispatch({ type: ActionRoomsType.REQUEST_GET_ROOMS, payload: { roomLoading: true } });
        axios
            .get(`${REACT_APP_BACKEND}/api/rooms`)
            .then(res => {
                dispatch({ type: ActionRoomsType.GET_ROOMS_SUCCESS, payload: res.data.data });
            })
            .catch(err => {
                dispatch({
                    type: ActionRoomsType.GET_ROOMS_FAILED,
                    payload: err.response ? err.response.data.error : null,
                });
		});
    }
};

export const fetchOneRoom = (slug: string) => {
    return (dispatch: Dispatch<ActionRooms>) => {
        dispatch({ type: ActionRoomsType.REQUEST_GET_ROOMS, payload: { roomLoading: true } });
        axios
            .get(`${REACT_APP_BACKEND}/api/rooms/${slug}`)
            .then(res => {
                dispatch({ type: ActionRoomsType.GET_SINGLE_ROOM_SUCCESS, payload: res.data.data });
            })
            .catch(err => {
                dispatch({
                    type: ActionRoomsType.GET_ROOMS_FAILED,
                    payload: err.response ? err.response.data.error : null,
                });
		});
    }
};
