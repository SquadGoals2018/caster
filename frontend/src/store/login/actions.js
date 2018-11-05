// import

// export const login = (user, password) => async (dispatch, getState) => {
//   const axios = getDefaultAxios(getState());
//   try {
//     const response = await axios.post('/administration/login', {
//       login_credential: user,
//       password,
//     });
//     dispatch(loginSuccess(response.data.token));
//     return response;
//   } catch (error) {
//     dispatch(loginFail(error));
//     throw error;
//   }
// };
