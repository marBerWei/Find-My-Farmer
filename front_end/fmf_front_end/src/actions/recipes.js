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

// export function fetchBooks() {
//   return function(dispatch) {
//     dispatch(fetchingBooks())
//     fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
//       .then((res) => res.json())
//       .then((json) => {
//         const books = json.items
//         dispatch(fetchedBooks(books))
//       })
//   }
// }




export function fetchRecipes(ingredients) {
  return function(dispatch) {
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/addIngredientsToFetchRequest',{
       method: 'POST',
       body: JSON.stringify({ingredients: ingredients}),
       headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
       }
     }
    )
    .then((res) => res.json())
    .then((data) => {
    	const recipes = data.recipes
    	dispatch(fetchedRecipes(recipes))
	})
	}
 }



