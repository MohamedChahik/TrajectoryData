/**
 *
 * @param initState
 * @param fnMap
 * @returns {function(*=, {type: *, payload?: *}): *}
 */
export const createReducer = (initState: any, fnMap: any) => {
	return (state = initState, {type, payload}) => {
		const handler = fnMap[type];

		return handler ? handler(state, payload) : state;
	};
};