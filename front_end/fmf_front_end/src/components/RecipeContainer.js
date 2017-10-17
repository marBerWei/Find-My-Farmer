import React from 'react'
import { connect } from 'react-redux'
import RecipeList from './recipeList'
import IngredientList from './IngredientList'
//import { fetchrecipes } from '../actions/recipes'
import * as recipeActions from '../actions/recipes'


class RecipeContainer extends React.Component {


  render() {
  		console.log(this.props.recipe_list)
      
      return (
          <div>
                
            <h1>hi</h1>

          </div>
      )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    recipe_list: state.recipes.recipes
  }
}


export default connect(mapStateToProps)(recipeContainer)