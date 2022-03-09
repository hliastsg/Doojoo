const user = localStorage.getItem("user")

export const LoginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: localStorage.getItem("user")
  }
}

export const LoginError = () => {
  return {
    type: 'LOGIN_ERROR',
    payload: null
  }
}

export const Logout = () => {
  return {
    type: 'LOGOUT',
    payload: user
  }
}

// const authAction = (getState) => {
//   const cookie = new Cookies();

//   const token = cookie.get("access_token");
//   const user = localStorage.getItem("user");

//   if (token && user) {
//     return({
//       type: LOGIN_SUCCESS,
//       payload: user
//     });
//   } else {
//     return({
//       type: LOGIN_ERROR,
//       payload: null
//     });
//   };
  
// }
//export default authAction;