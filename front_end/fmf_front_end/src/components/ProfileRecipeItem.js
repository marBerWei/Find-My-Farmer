import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletingUserRecipe } from '../actions/recipes'
import WebModal from './WebModal'


class ProfileRecipeItem extends React.Component {

  state = {
    clicked: false,
    opened: false
  }


  onClick = (event) => {
    event.preventDefault()
    this.props.deletingUserRecipe(this.props.Recipe,this.props.user_id)
    //this.props.savingRecipe(this.props.Recipe, this.props.user_id)
  }

  clicked = (event) => {
    event.preventDefault()
    this.setState({
      clicked: !this.state.clicked
    })
  }

  popUp = (e) => {
      e.preventDefault()
      console.log(e.target)
      this.setState({opened: true})
      // const web = document.getElementById('website')
      // web.className = "ui active modal"
    }

	 render (){
    console.log(this.state)
    console.log(this.props.Recipe.source_url)
    console.log(this.props)

    if(localStorage.getItem("jwtToken")){
      return (
        <div style={{margin:"10px"}}>
        <WebModal opened={this.state.opened} url={this.props.Recipe.f2f_url}/>
        <Card onClick= {this.onFrame}>
           <div style={{overflow:"hidden",height: "200px"}}><img src={this.props.Recipe.image_url} /></div>
          <Card.Content>
            <Card.Header>
                <h1> {this.props.Recipe.title}</h1>
            </Card.Header>
          </Card.Content>
          <Card.Content extra onClick={this.clicked}>
          </Card.Content>
            <div className="ui two buttons">
              <button 
                style={{background: 'IndianRed', color: 'white'}}
                className="ui button" 
                name="recipes" 
                value= {this.props.Recipe} 
                onClick={this.onClick}
                > - Delete Recipe!
              </button><br/>
              <button
                style={{borderRadius: 2, background: 'orange'}}
                className="ui button" 
                name="details" 
                value= {this.props.Recipe.source_url} 
                onClick={this.popUp}
              >Details</button>
            </div>
        </Card>
        
        </div>
      )

      }
  }
}

function mapStateToProps(state){
return {
    user_id: state.login.user.id
  }
}

function mapDispatchToProps(dispatch){
  return {
    deletingUserRecipe: (recipe, user) => {
      dispatch(deletingUserRecipe(recipe, user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileRecipeItem)
