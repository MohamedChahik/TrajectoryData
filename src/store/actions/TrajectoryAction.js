//@flow
import * as types from "../types/Types";

/**
 *
 * @param data
 * @returns {{payload: ?Array, type: string}}
 */
export const displayTrajectory =  (data: Array): Object => ({
	type   : types.ALL_TRAJECTORY,
	payload: data
});

/**
 *
 * @returns {{types: string}}
 */
export const previewTrajectory = (): Object => ({
	type: types.PREVIEW_TRAJECTORY
});

/**
 *
 * @param id
 * @returns {{payload: number, type: string}}
 */
export const selectTrajectoryShow = (id: number): Object => ({
	type   : types.SELECT_TRAJECTORY,
	payload: id
});








