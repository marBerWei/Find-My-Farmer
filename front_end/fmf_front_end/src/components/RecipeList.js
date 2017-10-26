import React from 'react'
import RecipeItem from './RecipeItem'
import { Card, Grid, Segment } from 'semantic-ui-react'


const RecipeList = (props) => {
  console.log(props)
  
  const recipes = props.recipes.map((Recipe, i) => {
     return <RecipeItem key= {i} Recipe={Recipe} handleClick={props.handleClick}/>
  })
  
  return (
    <Card.Group>{recipes}</Card.Group>
  )
}

export default RecipeList
