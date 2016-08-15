import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import test from './reducers/';

const rootReducer = combineReducers({
  test,
  routing: routerReducer
});

const initialState = {
  test: {
    fun: false
  }
};

export const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

export const history = syncHistoryWithStore(browserHistory, store);
