function loginReducer(state = { username: "", password:""}, action) {
  switch (action.type) {
    case "LOGGING_IN":
  		console.log(action.payload.username)
      return Object.assign({}, state, {username: action.payload.username, password: action.payload.password})
    default:
      return state
  }
}


export default loginReducer
