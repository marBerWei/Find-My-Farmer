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
    

  		
      console.log(this.props.recipe_list)
      
      return (
        
          <Grid>
          <div className="cardBody">
            <Grid.Column width={16}>
              <RecipeList recipes = {this.props.recipe_list} handleClick={this.handleClick}/>
              <Link to={`/markets`}>Go Shopping!</Link>
            </Grid.Column>
            </div>
          </Grid>
        
      )
  }
}

// <Segment.Group horizontal>
//       <Segment>Left</Segment>
//       <Segment>Middle</Segment>
//       <Segment>Right</Segment>
// </Segment.Group>


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    recipe_list: state.recipes.recipes.slice(0,5)
  }
}


export default connect(mapStateToProps)(RecipeContainer)