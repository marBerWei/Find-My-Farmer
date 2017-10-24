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
// import MapContainer from './components/MapContainer'
// import { GoogleApiWrapper } from 'google-maps-react'
// import DayOfWeekForm from './components/DayOfWeekForm'

class App extends Component {


  render() {
    return (
      <div className="App">
      <NavBar render={(props) => <App {...props}/>}/>
      <Route exact path="/" component={MarketForm}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/day" component={DayOfWeekForm}/>
      <Route exact path="/markets" component={MarketContainer}/>
      <Route exact path="/ingredients" render={(props) => <IngredientContainer {...props}/>}/>
      <Route exact path="/recipes" component={RecipeContainer}/>
      <Route exact path="/me" component={Profile}/>
      </div>
    );
  }
}

export default App;



  // <Route path='/' render={(props) => <Navbar onClick={this.logout}/> } />
  //     <Route path="/users/" render={() =><Redirect to='/login'/>}/>
  //     <Route path="/athletes" render={(props) => <AthleteContainer {...props} /> }/>
  //     <Route path="/login" render={(props) => <Login onLogin={this.login} {...props} /> }/>
  //     <Route exact path='/signup' render={(props) => {return <Signup onSignUp={this.signup} {...props}/>}} />
  //     <Route exact path="/sitemap" render={(props) => <SiteMap />} /> 
  //     <Route exact path="/contact" render={(props) => <Contacts />} /> 
  //     <Route exact path="/termsandconditions" render={(props) => <TermsAndConditions />} /> 
  //     <Route exact path="/privacy" render={(props) => <PrivacyPolicy />} /> 
  //     <Footer />
