import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { savingRecipe } from '../actions/recipes'
import WebModal from './WebModal'


class RecipeItem extends React.Component {

  state = {
    clicked: false,
    opened: false
  }


  onClick = (event) => {
    event.preventDefault()
    console.log(this.props.Recipe)
    this.props.handleClick(event)
    this.props.savingRecipe(this.props.Recipe, this.props.user_id)
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

    if(localStorage.getItem("jwtToken")){
    return (
        <div>
        <WebModal opened={this.state.opened} url={this.props.Recipe.f2f_url}/>
        <Card onClick= {this.onFrame}>
           <Image src={this.props.Recipe.image_url} />
          <Card.Content>
            <Card.Header>
                <h1> {this.props.Recipe.title}</h1>
            </Card.Header>
          </Card.Content>
          <Card.Content extra onClick={this.clicked}>
            <a><Icon name={this.state.clicked ? 'red heart' : 'empty heart'}/></a>
          </Card.Content>
            <div className="ui two buttons">
              <button 
                style={{background: 'green', color: 'white'}}
                className="ui button" 
                name="recipes" 
                value= {this.props.Recipe} 
                onClick={this.onClick}
                > + Save Recipe!
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
      } else {
        return (
          <div>
        <WebModal opened={this.state.opened} url={this.props.Recipe.f2f_url}/>
        <Card onClick= {this.onFrame}>
           <Image src={this.props.Recipe.image_url} />
          <Card.Content>
            <Card.Header>
                <h1> {this.props.Recipe.title}</h1>
            </Card.Header>
          </Card.Content>
          <Card.Content extra onClick={this.clicked}>
            <a><Icon name={this.state.clicked ? 'red heart' : 'empty heart'}/></a>
          </Card.Content>
            <div className="ui button">
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
    savingRecipe: (recipe, user) => {
      dispatch(savingRecipe(recipe, user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem)

