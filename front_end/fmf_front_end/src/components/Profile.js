import React from 'react'
import {connect} from 'react-redux'

// EDIT THIS PAGE
// import HistoryList from './HistoryList'

class Profile extends React.Component {

  componentDidMount(){
    console.log("profile mounting")
    // dispatch action that updates the store
    // fetch request to the back end uising the jwt token

  }

  render(){
    return (
      <div>
          <div className="ui blue centered card" id="user-card">
          <div className="content">
            <h2> First Name: {this.props.name}</h2>
            <div className="meta">
            <h2> Email: {this.props.email} </h2>
            </div>
          </div>
        </div>
        <div><h1>Favorite Recipes</h1></div>
          <h2> {this.props.saved_recipes} </h2>
    </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    //ingredients_list: state.markets.markets,
    name: state.login.name,
    email: state.login.email,
    saved_recipes: state.recipes.saved_recipes
  }
}

export default connect(mapStateToProps)(Profile)