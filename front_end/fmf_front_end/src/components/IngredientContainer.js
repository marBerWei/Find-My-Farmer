import React from 'react'
import { connect } from 'react-redux'
import { Grid, List, Loader} from 'semantic-ui-react'
import IngredientListForm from './IngredientListForm'
import { giantString } from '../helperFunctions/giantString'
import { makeArrayOfIngredients } from '../helperFunctions/makeArrayOfIngredients'
import { arrayMerge } from '../helperFunctions/arrayMerge'

class IngredientContainer extends React.Component {


  render() {
    console.log("RENDERING", this.props.markets_list)
    const product_string = giantString(this.props.markets_list)
    const arrayOfIngredients = makeArrayOfIngredients(product_string,this.props.ingredients_list)
    const mergedArray = arrayMerge(arrayOfIngredients)
    const newState = () => {
      let obj = {}
      mergedArray.forEach(el => {
        obj[el] = false
      })
      return obj
    }
    console.log(newState())
    

    return(
  
        <Grid>
          <Grid.Row width={16}>
            <Loader active={this.props.isFetching} inline />
            <IngredientListForm history={this.props.history} ingredients={mergedArray} obj={newState()}/>

          </Grid.Row>
        </Grid>
   
    )
  }
}


function mapStateToProps(state) {
  console.log("the state is", state.markets.markets, state.markets.ingredients)
  //state.markets.markets is an array of markets objects
  //state.markets.ingredients is an object
  return {
    markets_list: state.markets.markets,
    ingredients_list: state.markets.ingredients,
    isFetching: state.recipes.isFetching
  }
}

export default connect(mapStateToProps)(IngredientContainer)


