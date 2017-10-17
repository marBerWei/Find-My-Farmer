export function fetchingRecipes() {
  return {
    type: "FETCHING_RECIPES"
  }
}

export function fetchedRecipes(recipes) {
  return {
    type: "FETCHED_RECIPES",
    payload: recipes
  }
}

// export function fetchRecipes(string) {
//   return function(dispatch) {
//     dispatch(fetchingRecipes())
//     fetch(`http://food2fork.com/api/search?key=827ace4f4a570a48be860f9fb87e7f66&q=${string}`,{mode:'no-cors'})
//       .then((res) => res.json())
//       .then((json) => {
//         const recipes = json.recipes
//         dispatch(fetchedRecipes(recipes))
//       })
//   }
// }
