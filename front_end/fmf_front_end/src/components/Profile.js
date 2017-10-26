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
        return <ProfileRecipeItem Recipe={recipe} />
      })
    }
    
    console.log(this.props.saved_recipes)
    console.log(this.props.name)
    return (
      <div className="profileBackground">

        <div  className= "centered" style={{color:"white",size:"40px"}}><h1>{(this.props.name).slice(0,1).toUpperCase() + this.props.name.slice(1) + "'s Favorite Recipes"}</h1></div><br/>
       
        <Card.Group style={{margin: "0 auto"}}>{recipes}</Card.Group>
      
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