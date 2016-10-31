import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import recipes from './recipes';
import comments from './comments';

const rootReducer = combineReducers({recipes, comments, routing: routerReducer});

export default rootReducer;