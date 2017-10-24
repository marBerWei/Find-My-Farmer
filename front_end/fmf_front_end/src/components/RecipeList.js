import React from 'react'
import RecipeItem from './RecipeItem'
import { Grid, Segment } from 'semantic-ui-react'


const RecipeList = (props) => {
  console.log(props)
  
  const recipes = props.recipes.map((Recipe, i) => {
     return <Segment><RecipeItem key= {i} Recipe={Recipe} handleClick={props.handleClick}/></Segment>
  })
  
  return (
    <div>{recipes}</div>
  )
}

export default RecipeList
