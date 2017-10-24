export function fetchingUser(payload){
  return { 
    type: "LOGGING_IN",
    payload
  }
}

export function loggedIn(user) {
  return {
    type: "FETCHED_USER",
    payload: user
  }
}

export function fetchUser(loginParams, props){
	
  return function(dispatch){
	dispatch(fetchingUser())
	fetch("http://localhost:3001/login", {
      method: 'post',
      body: JSON.stringify(loginParams),
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
      	console.log(props)
        console.log("sending json", json)
        localStorage.setItem("jwtToken", json.jwt)
      	dispatch(loginUser(json))
      })
      .then(() => props.history.push('/'))
    }

}

export function loginUser(payload){
  return { 
    type: "LOGIN_USER",
    payload
  }
}
