function loginReducer(state = { user: {jwt:"", email:"", id:"", name: ""}, logged_in: false, logging_in: false}, action) {
  switch (action.type) {
    case "LOGGING_IN":
  		console.log(action.payload)
      return Object.assign({}, state, {logging_in: true})
    case "FETCHED_USER":
      return Object.assign({}, state, {logging_in: false, logged_in: true} )
    case "LOGIN_USER":
    	console.log("got here", action.payload)
      return Object.assign({}, state, {user: action.payload})
    default:
      return state
  }
}

export default loginReducer




// function recipeReducer(state = { isFetching: false, recipes: [], saved_recipes:[]}, action) {
//   switch (action.type) {
//     case "FETCHED_RECIPES":
//       return Object.assign({}, state, {recipes: action.payload, isFetching: false} )
//     case "FETCHING_RECIPES":
//       return Object.assign({}, state, { isFetching: true})
//     case "SAVE_RECIPE":
//       return Object.assign({}, state, {saved_recipes: [...state.saved_recipes, action.payload]} )
//     default:
//       return state
//   }
// }


// export default recipeReducer