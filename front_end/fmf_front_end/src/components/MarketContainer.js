import React from 'react'
import { connect } from 'react-redux'
import { Grid, List, Loader} from 'semantic-ui-react'
import MarketList from './MarketList'
import IngredientList from './IngredientList'
//import { fetchMarkets } from '../actions/markets'
import * as MarketActions from '../actions/markets'



class MarketContainer extends React.Component {


  render() {
      //console.log("RENDERING", this.props.market_list)
      const products = this.props.ingredients_list.map(el => {
        return <IngredientList products = {el.products}/>
      })
      
      return (
          <div>

            <Grid>
              <Grid.Column width={16}>
                <Loader active={this.props.isFetching} inline />
                
                <MarketList markets={this.props.market_list}/>
                <h1>{products}</h1>
                </Grid.Column>

              </Grid>
          </div>
      )
  }
}


function mapStateToProps(state) {
  //console.log("the state is", state)
  return {
    ingredients_list: state.markets.markets,
    market_list: state.markets.markets,
    isFetching: state.markets.isFetching
  }
}


// function mapDispatchToProps(dispatch) {
//   return {
//     fetchMarkets: () => {
//       dispatch(fetchMarkets())
//     }
//   }
// }





export default connect(mapStateToProps)(MarketContainer)
