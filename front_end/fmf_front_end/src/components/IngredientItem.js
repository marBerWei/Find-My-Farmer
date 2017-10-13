import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const IngredientItem = (props) =>{
	//console.log("hitting ingredient item")

	// let OneIngred = props.ingredient.map((ingred) => {
 //      	  	return <OneIngred ingredient={ingred} />
 //      	  })
 	//console.log(this.props.Ingredient)
    //const Ingredients = this.props
    return (
      <div>
      	<div>
      	  <h3>{props.ing}</h3>
      	 </div>
      </div>


    )
  }






export default IngredientItem