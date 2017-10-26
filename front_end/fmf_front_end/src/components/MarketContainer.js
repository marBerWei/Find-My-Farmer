import React from 'react'
import { connect } from 'react-redux'
import MarketList from './MarketList'
import IngredientListForm from './IngredientListForm'
//import { fetchMarkets } from '../actions/markets'
import { truthyObjs } from '../helperFunctions/truthyObjs'
import * as MarketActions from '../actions/markets'
import { getMarketObject } from '../helperFunctions/getMarketObject'
import { getArrayOfKeys } from '../helperFunctions/getArrayOfKeys'
import { Link } from 'react-router-dom'


class MarketContainer extends React.Component {

  componentDidMount() {
    console.log(this.props)
    if (!this.props.market_list) {
      this.props.history.push("/")
    }
  }

  render() {
    console.log(this.props.market_list)
    const chosen_ingreeds = this.props.selected_ingredients.ingredients
    const OG_ingredients = this.props.OG_ingredients

    console.log(chosen_ingreeds)
    const ingreeds = getArrayOfKeys(chosen_ingreeds,OG_ingredients)

    const MarketObj = getMarketObject(ingreeds, this.props.market_list)
    console.log(MarketObj)
    console.log(ingreeds)
    
    if(MarketObj.length === 0){
      return (
        <div>
          <h1>The ingredients for this recipe don't</h1> 
          <h1>seem to be available at a market near you!</h1>
          <Link to="/ingredients">Go back to Ingredient List!</Link>
        </div>

        )
    } else {
    return (

      <div>
        <h1>Your Markets!</h1>
        <MarketList markets={MarketObj}/>
      </div>

    )
  }
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    //ingredients_list: state.markets.markets,
    market_list: state.markets.markets,
    OG_ingredients: state.markets.ingredients,
    selected_ingredients: state.ingredients,
    isFetching: state.markets.isFetching
  }
}


export default connect(mapStateToProps)(MarketContainer)
