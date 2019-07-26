//@flow
import * as types from "../types/Types";

/**
 *
 * @param data
 * @returns {{payload: ?Array, type: string}}
 */
export const showIconPreview = (data: boolean): Object => ({
	type   : types.SHOW_PREVIEW_ICON,
	payload: data
});

/**
 *
 * @param data
 * @returns {{payload: ?Array, type: string}}
 */
export const hideIconPreview = (data: boolean): Object => ({
	type   : types.HIDE_PREVIEW_ICON,
	payload: data
});