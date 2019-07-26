import { combineReducers } from 'redux';

// Different reducers
import trajectory from './trajectory/trajectoryReducer';
import preview from './preview/previewReducer';

/*import { reducer as formReducer } from 'redux-form'*/

const rootReducers = combineReducers({
	data: trajectory,
	preview: preview
});

export default rootReducers;
