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

  returnMap = (someList) => {
   const filteredHerbs = this.props.ingredients_list.herb
   const filteredFruits = this.props.ingredients_list.fruit
   const filteredVeggies = this.props.ingredients_list.vegetable
   const filteredSeafood = this.props.ingredients_list.seafood
   const filteredPoultry = this.props.ingredients_list.poultry
   const filteredMeat = this.props.ingredients_list.meat
   const filteredFish = this.props.ingredients_list.fish
   const filteredCheese = this.props.ingredients_list.cheese
   const filteredDairy = this.props.ingredients_list.dairy
   
     return someList.map((food, i) => {
      return (
            <Card>
              <Card.Content>
                <Card.Header>
                  <p> {food}</p>
                </Card.Header>
              </Card.Content>
              <button 
                style={{background: this.buttonColor(food), color: 'white'}}
                key = {i} 
                className="ui primary button" 
                name="ingredients" 
                value= {food} 
                onClick={this.handleClick}>{this.state[food] ? "Remove " : "Add " }{food}
              </button><br/>
            </Card>
          )
      })
  }

  render() {

   const filteredHerbs = this.props.ingredients_list.herb
   const filteredFruits = this.props.ingredients_list.fruit
   const filteredVeggies = this.props.ingredients_list.vegetable
   const filteredSeafood = this.props.ingredients_list.seafood
   const filteredPoultry = this.props.ingredients_list.poultry
   const filteredMeat = this.props.ingredients_list.meat
   const filteredFish = this.props.ingredients_list.fish
   const filteredCheese = this.props.ingredients_list.cheese
   const filteredDairy = this.props.ingredients_list.dairy
    return (

      <div className="cardBody"> 
        <h1>Seasonal Ingredients</h1>
        <h2>Choose 2-3...remember to be adventurous!</h2>
        <form onSubmit={this.handleSubmit}>
        <table className="ui celled padded table">
        <tbody>
        <tr>

        <th><img className='table-header-img' src={require("../fresh_herbs.jpg")}/><div style={{textAlign: "center"}}><h1>Herbs</h1></div></th>
        <th><img className='table-header-img' src={require("../fruit.jpeg")}/><div style={{textAlign: "center"}}><h1>Fruits</h1></div></th>
        <th><img className='table-header-img' src={require("../vegetable.jpg")}/><div style={{textAlign: "center"}}><h1>Vegetables</h1></div></th>
        </tr>
        <tr>
        <td>{this.returnMap(filteredHerbs)}</td>
        <td>{this.returnMap(filteredFruits)}</td>
        <td>{this.returnMap(filteredVeggies)}</td>
        </tr>
        <tr>
        <th><img className='table-header-img' src={require("../chicken.jpg")}/><div style={{textAlign: "center"}}><h1>Poultry</h1></div></th>
        <th><img className='table-header-img' src={require("../cheese.jpg")}/><div style={{textAlign: "center"}}><h1>Cheeses</h1></div></th>
        <th><img className='table-header-img' src={require("../fresh-seafood.jpeg")}/><div style={{textAlign: "center"}}><h1>Fish</h1></div></th>
        </tr>
        <tr>
        <td>{this.returnMap(filteredPoultry)}</td>
        <td>{this.returnMap(filteredCheese)}</td>
        <td>{this.returnMap(filteredFish)}</td>
        </tr>
        </tbody>
        </table>
            
            <button className="ui primary submit button" name="Find Recipes" type="submit">Find Recipes</button>
        </form>
        <div>
          <label><h1>Your Chosen Ingredients</h1></label>
          <Card.Group><IngredientList trueValues={truthyObjs(this.state)}/></Card.Group><br/>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    ingredients_list: state.markets.ingredients
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


export default connect(mapStateToProps ,mapDispatchToProps)(IngredientsListForm)