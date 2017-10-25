function profileReducer(state = { profile_recipes: []}, action) {
  switch (action.type) {
    case "DISPLAY_PROFILE":
      return Object.assign({}, state, {profile_recipes: action.payload})
    default:
      return state
  }
}


export default profileReducer
