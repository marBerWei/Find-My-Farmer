import React from 'react'
import IngredientItem from './IngredientItem'
import { Grid } from 'semantic-ui-react'
import { unique } from '../helperFunctions/uniqueFunc'
import { truthyObjs } from '../helperFunctions/truthyObjs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addIngredients } from '../actions/ingredients'
import IngredientList from './IngredientList'
import { fetchRecipes } from '../actions/recipes'

class IngredientsListForm extends React.Component {
  
  state = this.props.obj

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
        [event.target.value]: !this.state[event.target.value]
    })
    console.log(this.state)
    //this.render()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const ingredients = truthyObjs(this.state)
    console.log(ingredients)
    this.props.addIngredients(ingredients)
    this.props.fetchRecipes(ingredients)
  }

  buttonColor = (food) => {
    return this.state[food] ? 'PaleVioletRed' : 'DarkSeaGreen'
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
            {this.props.ingredients.map((food, i) => <label>{food[0].toUpperCase() + food.slice(1)}<button style={{background: this.buttonColor(food), color: 'white'}} className="ui button" name="ingredients" value= {food} onClick={this.handleClick}>{this.state[food] ? "Remove " : "Add " }{food}</button><br/></label>)}
            <button className="ui submit button" name="Find Recipes" type="submit">Find Recipes</button>
        </form>
        </div>
        <Link to={`/recipes`}>Choose Your Recipes</Link>
        <div><br/><br/>
          <h1>Your Chosen Ingredients</h1>
          <IngredientList trueValues={truthyObjs(this.state)}/><br/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addIngredients: (state) => {
      dispatch(addIngredients(state))
    },
    fetchRecipes:(string) => {
      dispatch(fetchRecipes(string))
    }
  }
}



export default connect(null,mapDispatchToProps)(IngredientsListForm)