import { displayUserRecipe } from './profile'


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

export function savingRecipe(recipe, user_id) {
  console.log(user_id)
  const token = localStorage.getItem("jwtToken")
  return function(dispatch) {
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      body: JSON.stringify({recipe: recipe, user: user_id}),
      // , user: localStorage.getItem('jwtToken')
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((json) => {
      //   console.log(json)  
        dispatch(saveRecipe(json))
      })
  }
}

export function deletingUserRecipe(recipe, user_id) {
  console.log(user_id)
  const token = localStorage.getItem("jwtToken")
  return function(dispatch) {
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/delete_user_recipe', {
      method: 'POST',
      body: JSON.stringify({recipe: recipe, user: user_id}),
      // , user: localStorage.getItem('jwtToken')
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((json) => {
      //   console.log(json)  
        dispatch(fetchedRecipes(json))
        dispatch(displayUserRecipe(json))
      })
  }
}

export function saveRecipe(payload){
  return { 
    type: "SAVE_RECIPE",
    payload
  }
}

export function fetchRecipes(ingredients) {

  return function(dispatch) { 
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/addIngredientsToFetchRequest',{
       method: 'POST',
       body: JSON.stringify({ingredients: ingredients}),
       headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
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

export function fetchUserRecipe(user_id) {
  console.log(user_id)
  return function(dispatch) {
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/user_recipes', {
      method: 'POST',
      body: JSON.stringify({user: user_id}),
      // , user: localStorage.getItem('jwtToken')
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
      //   console.log(json)  
        dispatch(saveRecipe(json))
      })
  }
}

export function displayUserRecipes(payload){
  return { 
    type: "DISPLAY_USER_RECIPE",
    payload
  }
}
