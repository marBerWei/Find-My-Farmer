import React from 'react'
import { connect } from 'react-redux'
import { Grid, List, Loader} from 'semantic-ui-react'
import IngredientListForm from './IngredientListForm'
import { giantString } from '../helperFunctions/giantString'
import { makeArrayOfIngredients } from '../helperFunctions/makeArrayOfIngredients'
import { arrayMerge } from '../helperFunctions/arrayMerge'

class IngredientContainer extends React.Component {


  // GIANT PRODUCT STRING
  // make a giant product string by mapping over markets_list and for each obj, 
    // push el.products into a larger string

  // MAKE AN ARRAY OF CATEGORIES
  // start with an empty array
  // iterate over the ingredients object
  // for every object key, check the product string to see if that key exists
  // push this.props.ingredients_list[key] into initial array
  // return 


  render() {
    console.log("RENDERING", this.props.markets_list)
    const product_string = giantString(this.props.markets_list)
    const arrayOfIngredients = makeArrayOfIngredients(product_string,this.props.ingredients_list)
    const mergedArray = arrayMerge(arrayOfIngredients)

    return(
      <div><IngredientListForm ingredients={mergedArray}/></div>
    )
  }
}


function mapStateToProps(state) {
  console.log("the state is", state.markets.markets, state.markets.ingredients)
  //state.markets.markets is an array of markets objects
  //state.markets.ingredients is an object
  return {
    markets_list: state.markets.markets,
    ingredients_list: state.markets.ingredients
  }
}

export default connect(mapStateToProps)(IngredientContainer)


