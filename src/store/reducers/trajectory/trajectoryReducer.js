import * as types from "../../types/Types";
import {createReducer} from "../../../common/util/reducer.util";

import trajectory from '../../../trajectoires';


/**
 * gere la connection
 * @param state
 * @param payload
 * @returns {Object}
 */
export const displayAll = (state: Array = trajectory, payload: Array): Array => {
	let copyState = [...state];
	copyState.push(payload);
	return copyState[0];
};

/**
 *
 * @param state
 * @param payload
 */
export const previewAll = (state: Array = trajectory, payload: Array): Array => {
	return trajectory;
};

/**
 *
 * @param state
 * @param payload
 * @returns {Array}
 */
export const displayOneTrajectory = (state: Array = trajectory, payload: Array): Array => {
	let copy = [...state];
	let newState = [];

	for (let i = 0; i < copy.length; i++) {
		if(copy[i].id === payload) {
			newState = [...newState, copy[i]];
			newState[0].course = courseLength(copy[i].points);
			newState[0].speed = averageSpeed(copy[i].points);
			newState[0].numberStop = numberStop(copy[i].points);
			break;
		}
	}
	console.log(newState);
	return newState;
};

/**
 *
 * @param data
 * @returns {number}
 */
const courseLength = (data: Array): number => {
	let course = 0;
	for (let i = 0; i < data.length; i++) {
		course += data[i].time;
	}
	return course;
};

/**
 *
 * @param data
 * @returns {number}
 */
const averageSpeed = (data: Array): number => {
	let speed = data.map(item => Math.abs(Math.pow(item.x, 2) + Math.pow(item['y'], 2)) / item.time);
	let average = 0;

	for (let i = 0; i < speed.length; i++) {
		average += speed[i];
	}

	return average / speed.length
};

/**
 *
 * @param data
 * @returns {number}
 */
const numberStop = (data: Array): number => data.filter(item => item.x < 1 && item.y < 1).length;


export default createReducer(trajectory, {
	[types.ALL_TRAJECTORY]: displayAll,
	[types.SELECT_TRAJECTORY]: displayOneTrajectory,
	[types.PREVIEW_TRAJECTORY]: previewAll
});
