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
          <iframe
            width="600"
            height="450"
            src= {`https://www.google.com/maps/embed/v1/place?key=AIzaSyDuY3HZQGiU7RB_dZ7GYjaHmh-dvo4z4X4%20&q=${props.market.googleLink.slice(55)}`}>
            
          </iframe>
          
      	 </div><br/><br/>
      </div>


    )
}

export default MarketItem