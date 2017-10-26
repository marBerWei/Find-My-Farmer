import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'

class Nav extends React.Component {

  handleLogout = (event) => {
    event.preventDefault()
    console.log("logging out")
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("email")
    
  }

  render() {
    if (localStorage.getItem("jwtToken")) {
      return (
        <div className="ui inverted menu">
          <NavLink activeClassName="active orange item" className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active orange item" className="item" to="/ingredients">Ingredients</NavLink>
          <NavLink className="item" to="/home" onClick={this.handleLogout}>Logout</NavLink>
          <NavLink activeClassName="active orange item" className="item right" to="/me">My Profile</NavLink>
        </div>
      )
    } else {
      return (
        <div className="ui inverted menu">
          <NavLink activeClassName="active orange item" className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active orange item" className="item" to="/ingredients">Ingredients</NavLink>
          <NavLink activeClassName="active orange item" className="item" to="/signup">Sign Up</NavLink>
          <NavLink activeClassName="active orange item" className="item" to="/login">Login</NavLink>
        </div>
      )
    }
  }
}
export default Nav