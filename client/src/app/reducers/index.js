import * as actions from '../actions';
import store from '../store';

export default function appReducer(state = {}, action) {

//  console.log('reducer called! \naction:', action.type, '\nstate:', state);
  switch (action.type) {

    case actions.REGISTER_SUCCESS:
      return Object.assign({}, state, {user: action.user});

    case actions.REGISTER_ERROR:
      console.log('register error: ', action.error);
      return state;

    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.user});

    case actions.LOGIN_ERROR:
      console.log('login error: ', action.error);
      return state;

    case actions.LOGOUT_SUCCESS:
      return Object.assign({}, state, {user: null, usersList: null});

    case actions.LOGOUT_ERROR:
      console.log('logout error: ', action.error);
      return state;

    case actions.GET_USERS_LIST_SUCCESS:
      return Object.assign({}, state, {usersList: action.usersList});

    case actions.GET_USERS_LIST_ERROR:
      console.log('getUsersList error: ', action.error);
      return state;

    case actions.DELETE_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, {user: null, usersList: null});

    case actions.DELETE_CURRENT_USER_ERROR:
      console.log('getUsersList error: ', action.error);
      return state;

    default:
      return state;
  }

}
