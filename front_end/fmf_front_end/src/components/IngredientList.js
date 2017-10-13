import React from 'react'
import IngredientItem from './IngredientItem'
import { Grid } from 'semantic-ui-react'


const IngredientsList = (props) => {
  console.log(props.products.split(";"))
  const ingredArray = props.products.split(";").join("").split("and ")
  const IngredientItems = ingredArray.map((ing) => {
    return <IngredientItem ing={ing} />
  })
  // const IngredientItems = props.ingredients.map((ingredient) => {
  //   let array = ingredient.products
  //   console.log(array)
  //   return <IngredientItem ingredient={array} />
  // })
  // const IngredientNames = props.Ingredients.map((Ingredient, i) => {
  //   return <IngredientItem name={Ingredient[i]}/>
  // })
  return (
    <Grid>
      <Grid.Row>
          {IngredientItems}
      </Grid.Row>
    </Grid>
  )
}

export default IngredientsList
