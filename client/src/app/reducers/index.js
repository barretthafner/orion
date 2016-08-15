import * as actions from '../actions';

export default function appReducer(state = {}, action) {

  console.log('reducer called! action:', action, 'state:', state);
  switch (action.type) {

    case actions.REGISTER_SUCCESS:
      console.log('register success: ', action.credentials);
      return state;

    case actions.REGISTER_ERROR:
      console.log('register error: ', action.error);
      return state;

    default:
      return state;
  }

}
