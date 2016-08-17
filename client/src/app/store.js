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
    "user": {
      "username": "testy",
      "id": "57b3ad512b30860c4f7946ac",
      "email": "testy@orionapp.com",
      "starScore": 6,
      "list": [
        {
          "title": "test orion",
          "starValue": 1,
          "_id": "57b3ad522b30860c4f7946b5"
        },
        {
          "title": "make a friend",
          "starValue": 2,
          "_id": "57b3ad522b30860c4f7946b4"
        },
        {
          "title": "find love",
          "starValue": 3,
          "_id": "57b3ad522b30860c4f7946b3"
        }
      ]
    }
  }
};

export const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, routerMiddleware(browserHistory)));
export const history = syncHistoryWithStore(browserHistory, store);
