import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const IngredientItem = (props) =>{
	
    return (

		       
		<Card>{props.ingredient}</Card>
		        

	     
    )
  }






export default IngredientItem


// <div class="ui three column grid">
// 		  <div class="column">
// 		    <div class="ui fluid card">
// 		      <div class="image">
// 		        <img src="/images/avatar/large/daniel.jpg"/>
// 		      </div>
// 		      <div class="content">
// 		        <a class="header">{props.ingredient}</a>
// 		      </div>
// 	      	</div>
// 	       </div>
// 	     </div>