import React from 'react'
import IngredientItem from './IngredientItem'
import { Card, Icon, Grid, Segment } from 'semantic-ui-react'
import { unique } from '../helperFunctions/uniqueFunc'
import { truthyObjs } from '../helperFunctions/truthyObjs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addIngredients } from '../actions/ingredients'
import IngredientList from './IngredientList'
import { fetchRecipes } from '../actions/recipes'
import ingredients from '../foodData/seasonalIngredients'

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
    this.props.history.push('recipes')
  }

  buttonColor = (food) => {
    return this.state[food] ? 'PaleVioletRed' : 'DarkSeaGreen'
  }
  // if this food appears in foodData in a particular object,

  returnMap = () => {
     return this.props.ingredients.map((food, i) => {
      return (
            <Card>
              <Card.Content>
                <Card.Header>
                  <h1> {food}</h1>
                </Card.Header>
              </Card.Content>
              <button 
                style={{background: this.buttonColor(food), color: 'white'}}
                key = {i} 
                className="ui button" 
                name="ingredients" 
                value= {food} 
                onClick={this.handleClick}>{this.state[food] ? "Remove " : "Add " }{food}
              </button><br/>
            </Card>
          )
      })
  }

  render() {
    return (
      <div className="cardBody"> 
        <form onSubmit={this.handleSubmit}>
            {this.returnMap()}
            <button className="ui submit button" name="Find Recipes" type="submit">Find Recipes</button>
        </form>
        <div>
          <label><h1>Your Chosen Ingredients</h1></label>
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