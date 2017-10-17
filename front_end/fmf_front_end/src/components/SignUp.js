import React from 'react'
import semantic from 'semantic-ui-react'
import { grid } from 'semantic-ui-react'


class SignUp extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleFirstName = (event) => {
    event.preventDefault()
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastName = (event) => {
    event.preventDefault()
    this.setState({
      lastName: event.target.value
    })
  }
  handleEmail = (event) => {
    event.preventDefault()
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
   event.preventDefault()
    this.setState({
      password: event.target.value
    })
  }


  handleSignUp = () => {
    console.log(this.props)
    const signupParams = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    }

    fetch("http://localhost:3001/signup", {
    method: 'post',
    body: JSON.stringify(signupParams),
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }).then(res => res.json()).then(user => {
    console.log(user)
    localStorage.setItem("jwtToken", user.jwt)
    localStorage.setItem("firstName", user.user.first_name)
    localStorage.setItem("lastName", user.user.last_name)
    localStorage.setItem("email", user.user.email)


  })
  this.props.history.push("/home")


  }

  render(){
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 id="login-header" className="ui blue image header">
          <div className="content">Sign up for an account</div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <input type="text" name="first-name" placeholder="First Name" onChange={this.handleFirstName}/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input type="text" name="last-name" placeholder="Last Name" onChange={this.handleLastName}/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input type="text" name="email" placeholder="E-mail address" onChange={this.handleEmail}/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input type="password" name="password" placeholder="Password" onChange={this.handlePassword}/>
              </div>
            </div>

            <div className="ui fluid large blue submit button" onClick={this.handleSignUp}>Sign Up</div>
            <h4>Already a fan?
              <a href="/login"> Sign in here</a>
            </h4>
          </div>

        </form>
      </div>

    </div>

  )
}
}

export default SignUp