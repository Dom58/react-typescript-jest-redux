import { ActionType } from '../types'

interface ICreateRequest {
	type: ActionType.CREATE_REQUEST
}
interface IAddition {
	type: ActionType.CREATE_ADDITION
	payload: number
}
interface ISubstraction {
	type: ActionType.CREATE_SUBSTRACTION
	payload: number
}
interface IMultiplication {
	type: ActionType.CREATE_MULTIPLICATION
	payload: number
}
interface IDivision {
	type: ActionType.CREATE_DIVISION
	payload: number
}

const initialState = {
	result: 0,
	loading: null
};

export type Action = ICreateRequest | IAddition | ISubstraction | IMultiplication | IDivision;

export default function (state = initialState, action: Action) {
	switch (action.type) {
		case ActionType.CREATE_REQUEST:
			return {
				...state,
				loading: false
			}
		case ActionType.CREATE_ADDITION:
			return {
				...state,
				result: action.payload,
				loading: true
			}
		case ActionType.CREATE_SUBSTRACTION:
			return {
				...state,
				result: action.payload
			}
		case ActionType.CREATE_MULTIPLICATION:
			return {
				...state,
				result: action.payload
			}
		case ActionType.CREATE_DIVISION:
			return {
				...state,
				result: action.payload
			}
		default:
			return state; //or return initialState
	}
}
