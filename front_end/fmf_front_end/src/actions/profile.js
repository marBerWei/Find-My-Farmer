export function fetchingSavedRecipes(user_id) {
  console.log(user_id)
  const token = localStorage.getItem("jwtToken")
  return function(dispatch) {
    dispatch(fetchingRecipes())
    fetch('http://localhost:3001/getRecipes', {
      method: 'GET',
      body: JSON.stringify({user: user_id}),
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