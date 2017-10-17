import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDays } from '../actions/dayOfWeek'

class DayOfWeekForm extends React.Component {
	state = {
		sun: false,
		mon: false,
		tue: false,
		wed: false,
		thu: false,
		fri: false,
		sat: false
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addDays(this.state)

	}

	handleClick = (event) => {
		this.setState ({
			[event.target.value]: !this.state[event.target.value]
		}, () => console.log(this.state))
	}

	render(){
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<h1>Choose Your Shopping Day!</h1>
				<h2>(as many as you like)</h2>
				<div>
				  <label>Sunday</label>
  				  <input checked={this.state.sun} type="checkbox" name="days" value="sun" onClick={this.handleClick}/>
  				</div><b/>
  				<div>
				  <label>Monday</label>
	  			  <input checked={this.state.mon} type="checkbox" name="days" value="mon" onClick={this.handleClick}/>
	  			</div><b/>
	  			<div>
	  			  <label>Tuesday</label>
	  			  <input checked={this.state.tue} type="checkbox" name="days" value="tue" onClick={this.handleClick}/>
	  			</div><b/>
	  			<div>
	  			  <label>Wednesday</label>
	  			  <input checked={this.state.wed} type="checkbox" name="days" value="wed" onClick={this.handleClick}/>
	  			</div><b/>
	  			<div>
	  			  <label>Thursday</label>
	  			  <input checked={this.state.thu} type="checkbox" name="days" value="thu" onClick={this.handleClick}/>
	  			</div><b/>
	  			<div>
	  			  <label>Friday</label>
	  			  <input checked={this.state.fri} type="checkbox" name="days" value="fri" onClick={this.handleClick}/>
	  			</div><b/>
	  			<div>
	  			  <label>Saturday</label>
	  			  <input checked={this.state.sat} type="checkbox" name="days" value="sat" onClick={this.handleClick}/>
	  			</div><b/>
	  			<input className="ui button" type= "submit"></input>
			</form>
			<Link to={`/ingredients`}>Choose Your Ingredients</Link>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {
		addDays: (state) => {
			dispatch(addDays(state))
		}
	}
}

export default connect(null,mapDispatchToProps)(DayOfWeekForm)