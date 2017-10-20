import React from 'react'
import { NavLink } from 'react-router-dom'

class NavComponent extends React.Component {
  render() {
    return (
      <div className="ui inverted menu">
        <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
      </div>
    )
  }
}


export default NavComponent
