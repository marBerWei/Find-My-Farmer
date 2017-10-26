function ingredientsReducer(state = { ingredients: ''}, action) {
  switch (action.type) {
    case "ADD_INGREDIENTS":
      return Object.assign({}, state, {ingredients: action.payload})
    default:
      return state
  }
}


export default ingredientsReducer
