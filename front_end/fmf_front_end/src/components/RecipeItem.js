import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const RecipeItem = (props) =>{
	
    return (

    <div class="ui items">
  	  <div class="item">
  	  <a class="ui small image">
  	  <div style= {{marginLeft: "auto", marginRight: "auto", width:"200px",height:"200px",borderRadius:"100px",backgroundImage: `url('${props.Recipe.image_url}')`}}></div>
  	  </a>
      <div class="content">
      <a class="header">{props.Recipe.title}</a>
      <div class="description">
        <p>{props.Recipe.source_url}</p>
      </div>
      </div>
      </div>
    </div>
    )
  }


export default RecipeItem

