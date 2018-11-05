import { SET_SESSION } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }
};
