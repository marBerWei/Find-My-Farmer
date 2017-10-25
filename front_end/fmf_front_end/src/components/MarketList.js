import React from 'react'
import MarketItem from './MarketItem'
import { Grid } from 'semantic-ui-react'


const MarketList = (props) => {
  console.log("props from market list", props)
  
  const marketItems = props.markets.map((market) => {
    return <MarketItem market={market} />
  })
  
  return (
    <div>
      {marketItems}
    </div>
  )
}

export default MarketList
