import React, { Component } from 'react';
import MarketContainer from './components/MarketContainer'
import './App.css';
import IngredientContainer from './components/IngredientContainer'
import RecipeContainer from './components/RecipeContainer'
import MarketForm from './components/MarketForm'
import DayOfWeekForm from './components/DayOfWeekForm'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter} from 'react-router'
import * as actions from './actions/loginInfo'


class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwtToken')
    // if (token && !this.props.user.logged_in)
    console.log(token)
    if (token) {
      this.props.fetchUserFromToken(token)
    }
  }

  render() {
    return (
      <div className="App">
      <NavBar render={(props) => <App {...props}/>}/>
      <Route exact path="/" component={MarketForm}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/day" component={DayOfWeekForm}/>
      <Route exact path="/markets" render={(props) => <MarketContainer {...props}/>}/>
      <Route exact path="/ingredients" render={(props) => <IngredientContainer {...props}/>}/>
      <Route exact path="/recipes" render={(props) => <RecipeContainer {...props}/>}/>
      <Route exact path="/me" component={Profile}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}
export default withRouter(connect(mapStateToProps, actions)(App));
