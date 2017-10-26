function logoutReducer(state = { logged_out: true}, action) {
  switch (action.type) {
    case "LOGGING_OUT":
      return Object.assign({}, state, {logged_out: false})
    default:
      return state
  }
}


export default logoutReducer
