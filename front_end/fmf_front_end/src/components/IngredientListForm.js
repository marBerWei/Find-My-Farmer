import React from 'react'
import IngredientItem from './IngredientItem'
import { Grid } from 'semantic-ui-react'
import { unique } from '../helperFunctions/uniqueFunc'
import { truthyObjs } from '../helperFunctions/truthyObjs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addIngredients } from '../actions/ingredients'
// import { fetchRecipes } from '../actions/recipes'

class IngredientsListForm extends React.Component {
  //console.log(props.products.split(";"))
  state= {

  }

  handleClick = (event) => {
    event.preventDefault()
    if (this.state[event.target.value]){
      this.setState({
        [event.target.value]: !this.state[event.target.value]
      })
      
    } else {
      this.setState({
        [event.target.value]: true
      })
      
    } 
    console.log(this.state)

  }
  handleSubmit = (event) => {
    event.preventDefault()
    const ingredients = this.state
    console.log(ingredients)
    const body = JSON.stringify(ingredients)
    this.props.addIngredients(this.state)
    fetch('http://localhost:3001/addIngredientsToFetchRequest',{
      method: 'POST',
      body: {recipes: body},
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    
      }
    )
  }

  componentDidMount(){
    fetch('http://localhost:3001/recipes')
      .then(res => res.json())
      .then(res => this.setState({
        recipes: res
      }))
  }

  // handleFetch = (event) => {
  //   event.preventDefault()
  //   //const true_vals = truthyObjs((this.props.ingredients).toString())
  //   this.props.fetchRecipes("cheese")
  // }

  returnMap = () => {
    return this.props.ingredients.map((food, i) => <label>{food}<input checked={this.state[food]} value= {food} type="checkbox" name={food} onClick={this.handleClick}/><br/></label>)
  }
  render(){
    console.log(this.state)
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          {this.returnMap()}
          <input className="ui button" type="submit"/>
      </form>
          <button className="ui button" type="submit" onClick={this.handleFetch}>Find Recipes!</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ingredient_list: state.ingredients,
  }
}

function mapDispatchToProps(dispatch){
  return {
    addIngredients: (state) => {
      dispatch(addIngredients(state))
    },
    // fetchRecipes:(string) => {
    //   dispatch(fetchRecipes(string))
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IngredientsListForm)
