import React from 'react'
import { connect } from 'react-redux'
import MarketList from './MarketList'
import IngredientListForm from './IngredientListForm'
//import { fetchMarkets } from '../actions/markets'
import * as MarketActions from '../actions/markets'


class MarketContainer extends React.Component {

  render() {   
    return (
      <div>   
        <MarketList markets={this.props.market_list}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    //ingredients_list: state.markets.markets,
    market_list: state.markets.markets,
    isFetching: state.markets.isFetching
  }
}


export default connect(mapStateToProps)(MarketContainer)
