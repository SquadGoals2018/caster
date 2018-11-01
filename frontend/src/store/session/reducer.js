import { SET_SESSION } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
