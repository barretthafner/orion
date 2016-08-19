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
      return Object.assign({}, state, {user: null, usersList: []});

    case actions.LOGOUT_ERROR:
      console.log('logout error: ', action.error);
      return state;

    case actions.GET_USERS_LIST_SUCCESS:
      return Object.assign({}, state, {usersList: action.usersList});

    case actions.GET_USERS_LIST_ERROR:
      console.log('getUsersList error: ', action.error);
      return state;

    case actions.DELETE_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, {user: null, usersList: []});

    case actions.DELETE_CURRENT_USER_ERROR:
      console.log('deleteCurrentUser error: ', action.error);
      return state;

    case actions.SEND_FRIEND_REQUEST_SUCCESS:
      const friendRequestOutput = Object.assign({}, state);
      friendRequestOutput.user.friendships = action.friendships;
      return friendRequestOutput;

    case actions.SEND_FRIEND_REQUEST_ERROR:
      console.log('sendFriendRequest error: ', action.error);
      return state;

    case actions.UNFRIEND_SUCCESS:
      const unFriendOutput = Object.assign({}, state);
      unFriendOutput.user.friendships = action.friendships;
      return unFriendOutput;

    case actions.UNFRIEND_ERROR:
      console.log('unFriend error: ', action.error);
      return state;

    case actions.ADD_LIST_ITEM_SUCCESS:
      const addListItemOutput = Object.assign({}, state);
      addListItemOutput.user.list = action.list;
      return addListItemOutput;

    case actions.ADD_LIST_ITEM_ERROR:
      console.log('addListItem error: ', action.error);
      return state;

    default:
      return state;
  }

}
