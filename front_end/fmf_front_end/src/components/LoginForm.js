import React from 'react'
import {fetchUser} from '../actions/loginInfo'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})

  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const loginParams = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.fetchUser(loginParams, this.props)


  }

  //   loginUser(loginParams).then((user) => {
  //     localStorage.setItem("jwtToken", user.jwt)
  //     localStorage.setItem("email", user.email)
  //     this.setState({
  //       jwt: user.jwt
  //     })

  //     this.setState({email: "", password: ""})
  //   })
  // }

  

  render() {


      return (

        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 id="login-header" className="ui blue image header">
              <div className="content">Login to your account</div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">

                <div className="field">
                  <div className="ui left icon input">

                    <input type="text" name="email" placeholder="E-mail address" onChange={this.handleEmailChange} value={this.state.username}/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                  </div>
                </div>
                <h4>No Account Yet?
                  <a href="/SignUp">Sign Up Here</a>
                </h4>
                <div className="ui fluid large blue submit button" onClick={this.handleSubmit}>Login</div>
              </div>

            </form>
          </div>

        </div>

      )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchUser: (state, props) => {
      dispatch(fetchUser(state, props))
    }
  }
}



export default connect(null, mapDispatchToProps)(Login)





// if (localStorage.getItem('jwtToken')) {
//       return <Redirect to="/"/>
//     } else {















// import React from 'react'
// import { connect } from 'react-redux'
// import { addLoginInfo } from '../actions/loginInfo'
// import { Segment, Button, Divider } from 'semantic-ui-react'

// class LoginForm extends React.Component {
// 	state = {
// 		username: "",
// 		password: ""
// 	}

// 	handleSubmit = (event) => {
// 		console.log(this.props)
// 		event.preventDefault()
// 		this.props.addLoginInfo(this.state)
// 	}

// 	handleUsername = (event) => {
// 		this.setState ({
// 			username: event.target.value
// 		}, () => console.log(this.state))
// 	}

// 	handlePassword = (event) => {
// 		this.setState ({
// 			password: event.target.value
// 		}, () => console.log(this.state))
	
// 	}

// 	render(){
// 		return (
// 			<div>
// 			  <Segment padded>
// 			    <Button primary fluid>Login</Button>
// 			    <Divider horizontal>Or</Divider>
// 			    <Button secondary fluid>Sign Up Now</Button>
// 			  </Segment>

// 			<form onSubmit={this.handleSubmit}>
//   				<input className="ui input" type="text" value={this.state.username} onChange={this.handleUsername}/>
//  				<input className="ui input" type="password" value={this.state.password} onChange={this.handlePassword}/>
// 	  			<input className="ui button" type= "submit"></input>
// 			</form>
// 		</div>
// 		)
// 	}
// }

// function mapDispatchToProps(dispatch){
// 	return {
// 		addLoginInfo: (state) => {
// 			dispatch(addLoginInfo(state))
// 		}
// 	}
// }

// export default connect(null,mapDispatchToProps)(LoginForm)