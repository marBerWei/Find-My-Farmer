function dayOfWeekReducer(state = { days: []}, action) {
  switch (action.type) {
    case "ADDING_DAYS":
      return Object.assign({}, state, {days: [...state.days, action.payload]})
    default:
      return state
  }
}


export default dayOfWeekReducer
