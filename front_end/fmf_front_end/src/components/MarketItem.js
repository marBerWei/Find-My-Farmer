import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MarketItem extends React.Component {


  render() {
    console.log(this.props.market_id)
    //const markets = this.props
    return (
      <div>
      	  <h3>{this.props.market_id}</h3>

      </div>


    )
  }
}





export default MarketItem