import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducers from "../../store/reducers/index";

/**
 *
 * @param preloadedState
 * @returns {any}
 */
export const configureStore = preloadedState => {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const storeEnhancer = [middlewareEnhancer];

	const composeEnhancer = process.env.NODE_ENV !== "production" ? composeWithDevTools(...storeEnhancer) : compose(...storeEnhancer);

	const store = createStore(
		rootReducers,
		preloadedState,
		composeEnhancer
	);

	if (process.env.NODE_ENV !== "production") {
		if (module.hot) {
			module.hot.accept("../../store/reducers/index", () => {
				const newRootReducer = require("../../store/reducers/index").default;
				store.replaceReducer(newRootReducer)
			});
		}
	}

	return store;
};