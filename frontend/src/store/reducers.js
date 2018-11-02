import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import sessionReducer from 'store/session/reducer';

export default combineReducers({
  session: sessionReducer,
  form,
});
