import React from 'react'
import MarketItem from './MarketItem'
import { Grid } from 'semantic-ui-react'


const MarketsList = (props) => {
  console.log(props)
  const marketItems = props.markets.map((market) => {
    return <MarketItem market={market} market_id={market.id}/>
  })
  return (
    <Grid>
      <Grid.Row>
          {marketItems}
      </Grid.Row>
    </Grid>
  )
}

export default MarketsList
