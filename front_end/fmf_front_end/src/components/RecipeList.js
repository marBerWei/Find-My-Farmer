import React from 'react'
import RecipeItem from './RecipeItem'
import { Grid } from 'semantic-ui-react'


const RecipeList = (props) => {
  console.log(props)
  
  const recipes = props.recipes.map((Recipe) => {
     return <RecipeItem Recipe={Recipe} />
  })
  
  return (
    <div>
        {recipes}
    </div>
  )
}

export default RecipeList
