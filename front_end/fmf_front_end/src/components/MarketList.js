import React from 'react'
import MarketItem from './MarketItem'
import { Grid } from 'semantic-ui-react'


const MarketsList = (props) => {
  //console.log(props)
  
  const marketItems = props.markets.map((market) => {
    return <MarketItem market={market} />
  })
  // const marketNames = props.markets.map((market, i) => {
  //   return <MarketItem name={market[i]}/>
  // })
  return (
    <div>
      {marketItems}
    </div>
  )
}

export default MarketsList
