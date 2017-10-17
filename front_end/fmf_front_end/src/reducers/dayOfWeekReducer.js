function dayOfWeekReducer(state = { days: {}}, action) {
  switch (action.type) {
    case "ADD_DAYS":
      return Object.assign({}, state, {days: action.payload})
    default:
      return state
  }
}


export default dayOfWeekReducer
