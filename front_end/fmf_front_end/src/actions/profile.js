export function fetchingSavedRecipes() {
  // console.log(user_id)
  const token = localStorage.getItem("jwtToken")
  return function(dispatch) {
    fetch('http://localhost:3001/recipes', {
      method: 'GET',
      // body: JSON.stringify({user: user_id}),
      // , user: localStorage.getItem('jwtToken')
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)  
        dispatch(displayUserRecipe(json))
      })
  }
}

export function displayUserRecipe(json){
	return {
		type: "DISPLAY_PROFILE",
		payload: json
	}
}
