import React from 'react'
import IngredientItem from './IngredientItem'
import { Grid } from 'semantic-ui-react'


class IngredientList extends React.Component {

  state = {

  }

  render(){
    const ingredientItems = this.props.trueValues.split(",").map((ingredient) => {
    return <IngredientItem ingredient={ingredient} />
  })

    return (
      <div>
            {ingredientItems}
      </div>
    )
  }
}


export default IngredientList
