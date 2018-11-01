export const SET_SESSION = 'SET_SESSION';

export const setSession = () => dispatch => {
  dispatch({
    type: SET_SESSION,
    payload: 'result_of_simple_action',
  });
};
