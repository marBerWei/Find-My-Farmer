import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MarketItem extends React.Component {


  render() {
  	
 	console.log(this.props.market)
    //const markets = this.props
    return (
      <div>
      	<div>
      	  <h3>{this.props.market.name.slice(0,3)} miles</h3>
      	  <h3>{this.props.market.name.slice(3,this.props.market.name.length+1)}</h3>
      	  <h3>{this.props.market.address}</h3>
      	 </div><br/><br/>
      </div>


    )
  }
}





export default MarketItem