import React from 'react'
import { connect } from 'react-redux'
import { Grid, List, Loader} from 'semantic-ui-react'
import MarketList from './MarketList'
import { fetchMarkets } from '../actions/markets'
import * as MarketActions from '../actions/markets'
import MarketForm from './MarketForm'


class MarketContainer extends React.Component {
	


  render() {
      console.log("RENDERING", this.props)
      return (
          <div>

            <Grid>
              <Grid.Column width={16}>
                <Loader active={this.props.isFetching} inline />
                <MarketForm />
                <MarketList markets={this.props.market_list}/>
                
                </Grid.Column>

              </Grid>
          </div>
      )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    market_list: state.markets.list,
    isFetching: state.markets.isFetching
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchMarket: () => {
                /// action creator from './actions/Market'
      dispatch(fetchMarkets())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer)
