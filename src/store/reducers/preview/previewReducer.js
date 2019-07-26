import {createReducer} from "../../../common/util/reducer.util";
import * as types from "../../types/Types";

const init = false;

/**
 * affiche l'icone après le clique
 * @param state
 * @param payload
 * @returns {Object}
 */
export const showIcon = (state: Array = init, payload: Array): Array => {
	return payload;
};

/**
 * masque l'icone après le clique
 * @param state
 * @param payload
 * @returns {Object}
 */
export const hideIcon = (state: Array = init, payload: Array): Array => {
	return payload;
};

export default createReducer(init, {
	[types.SHOW_PREVIEW_ICON]: showIcon,
	[types.HIDE_PREVIEW_ICON]: hideIcon
})