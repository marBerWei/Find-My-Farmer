import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { parseSchedule } from '../helperFunctions/ParseSchedule'

const MarketItem = (props) => {
  	
 	console.log(props)
  let dayArray = parseSchedule(props.market.schedule)
  let day = dayArray.toString(", ")
  //console.log(day)
    
    return (
      <div>
      	<div>
      	  <h3>{props.market.name.slice(0,3)} miles</h3>
      	  <h3>{props.market.name.slice(3,props.market.name.length+1)}</h3>
      	  <h3>{props.market.address}</h3>
          <h3>{day}</h3>
      	 </div><br/><br/>
      </div>


    )
}





export default MarketItem