export const SET_SESSION = 'SET_SESSION';

export const setSession = token => dispatch => {
  dispatch({
    type: SET_SESSION,
    payload: {
      token,
    },
  });
};
