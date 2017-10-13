import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarketContainer from './components/MarketContainer'
import IngredientContainer from './components/IngredientContainer'
import MarketForm from './components/MarketForm'
import DayOfWeekForm from './components/DayOfWeekForm'

//import DayOfWeekForm from './components/DayOfWeekForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <MarketForm />
       <DayOfWeekForm/>
       <MarketContainer/>
       <IngredientContainer/>
       
      </div>
    );
  }
}

export default App;
