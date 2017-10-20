import React from 'react'
import { connect } from 'react-redux'
import { addLoginInfo } from '../actions/loginInfo'
import { Segment, Button, Divider } from 'semantic-ui-react'

class LoginForm extends React.Component {
	state = {
		username: "",
		password: ""
	}

	handleSubmit = (event) => {
		console.log(this.props)
		event.preventDefault()
		this.props.addLoginInfo(this.state)
	}

	handleUsername = (event) => {
		this.setState ({
			username: event.target.value
		}, () => console.log(this.state))
	}

	handlePassword = (event) => {
		this.setState ({
			password: event.target.value
		}, () => console.log(this.state))
	
	}

	render(){
		return (
			<div>
			  <Segment padded>
			    <Button primary fluid>Login</Button>
			    <Divider horizontal>Or</Divider>
			    <Button secondary fluid>Sign Up Now</Button>
			  </Segment>

			<form onSubmit={this.handleSubmit}>
  				<input className="ui input" type="text" value={this.state.username} onChange={this.handleUsername}/>
 				<input className="ui input" type="password" value={this.state.password} onChange={this.handlePassword}/>
	  			<input className="ui button" type= "submit"></input>
			</form>
		</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		addLoginInfo: (state) => {
			dispatch(addLoginInfo(state))
		}
	}
}

export default connect(null,mapDispatchToProps)(LoginForm)