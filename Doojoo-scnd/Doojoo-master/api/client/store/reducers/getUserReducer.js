const initState = {
  name: "",
  surname: "",
  dob: ""
};

const getUserReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        name: action.payload,
        surnme: action.surname,
        dob: action.surname
      }
    case 'CLEAR_USER':
      return {
        ...state,
        name: "",
        surname: "",
        dob: ""
      }
    default: return state;
  }
}

export default getUserReducer;