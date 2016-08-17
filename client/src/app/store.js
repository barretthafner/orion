import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import app from './reducers/';

const rootReducer = combineReducers({
  app,
  routing: routerReducer
});

const initialState = {
  app: {
    user: null
  }
};

export const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));
export const history = syncHistoryWithStore(browserHistory, store);
