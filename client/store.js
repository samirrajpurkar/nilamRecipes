import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import recipes from './data/recipes';

//create an object for the default data
const defaultState = {
  recipes,
  comments
};

// create store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;



