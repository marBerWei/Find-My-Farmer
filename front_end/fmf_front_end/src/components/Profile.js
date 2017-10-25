import React from 'react'
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { fetchingSavedRecipes } from '../actions/profile'
import { unique } from '../helperFunctions/uniqueFunc'
import ProfileRecipeItem from '../components/ProfileRecipeItem'

// EDIT THIS PAGE
// import HistoryList from './HistoryList'

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchingSavedRecipes()
    // fetch request to the back end using the jwt token

  }


  render(){
    let recipes

    if(this.props.saved_recipes.length > 0){
      let uniqueRecipes = unique(this.props.saved_recipes)
      recipes = uniqueRecipes.map(recipe => {
        return <Card.Group><ProfileRecipeItem Recipe={recipe} /></Card.Group>
      })
    }
    
    console.log(this.props.saved_recipes)

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
          <div>{recipes}</div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchingSavedRecipes: (state) => {
      dispatch(fetchingSavedRecipes(state))
    }
  }
}

function mapStateToProps(state) {
  return {
    name: state.login.user.name,
    email: state.login.user.email,
    saved_recipes: state.profile.profile_recipes
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)