import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import { Link } from 'react-router-dom'
import * as recipeActions from '../actions/recipes'


class RecipeContainer extends React.Component {
  handleClick = (event) => {
      event.preventDefault()
    console.log(event.target.value)
  }

  handleSave = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  
  render() {
    

  		
      console.log(this.props)
      
      return (
        
          <Grid>
          <div className="cardBody">
            <Grid.Column width={16}>
              <RecipeList recipes = {this.props.recipe_list} handleClick={this.handleClick}/>
              <button className= "ui button"><Link to={`/markets`}>Go Shopping!</Link></button>
            </Grid.Column>
            </div>
          </Grid>
        
      )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    recipe_list: state.recipes.recipes.slice(0,10)
  }
}


export default connect(mapStateToProps)(RecipeContainer)