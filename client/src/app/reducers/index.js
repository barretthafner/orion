import * as actions from '../actions';
import { push } from 'react-router-redux';
import store from '../store';

export default function appReducer(state = {}, action) {

  console.log('reducer called! \naction:', action.type, '\nstate:', state);
  switch (action.type) {

    case actions.REGISTER_SUCCESS:

//      store.dispatch(push('/dashboard'));

      return Object.assign({}, state, {user: action.user});

    case actions.REGISTER_ERROR:
      console.log('register error: ', action.error);
      return state;

    default:
      return state;
  }

}
