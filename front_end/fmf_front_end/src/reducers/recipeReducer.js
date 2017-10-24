import  getSeason  from '../helperFunctions/getSeason'

const season = getSeason()
function recipeReducer(state = { isFetching: false, recipes: [], saved_recipes:[]}, action) {
  switch (action.type) {
    case "FETCHED_RECIPES":
      return Object.assign({}, state, {recipes: action.payload, isFetching: false} )
    case "FETCHING_RECIPES":
      return Object.assign({}, state, { isFetching: true})
    case "SAVE_RECIPE":
      return Object.assign({}, state, {saved_recipes: [...state.saved_recipes, action.payload]} )
    default:
      return state
  }
}


export default recipeReducer
