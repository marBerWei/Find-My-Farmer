import React from 'react'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import { Link } from 'react-router-dom'
import * as recipeActions from '../actions/recipes'


class RecipeContainer extends React.Component {


  render() {
  		console.log(this.props.recipe_list)
      
      return (
          <div>
            <RecipeList recipes = {this.props.recipe_list}/>
            <Link to={`/markets`}>Go Shopping!</Link>
          </div>
      )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    recipe_list: state.recipes.recipes.slice(0,5)
  }
}


export default connect(mapStateToProps)(RecipeContainer)