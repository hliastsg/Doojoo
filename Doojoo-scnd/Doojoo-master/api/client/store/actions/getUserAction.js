
export const getUser = () => {
  return {
    type: 'GET USER',
    name: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
    dob: localStorage.getItem("dob")
  }
}

export const clearUser = () => {
  return {
    type: 'CLEAR_USER'
  }
}
