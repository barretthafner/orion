import * as actions from '../actions';

export default function test(state = {}, action) {

  switch (action.type) {
    case actions.FUN:
      console.log('fun');
      return Object.assign({}, state, {
        fun: true
      });
    default:
      console.log('default', action, state);
      return state;
  }

}
