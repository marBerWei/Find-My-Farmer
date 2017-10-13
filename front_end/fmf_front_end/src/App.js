import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarketContainer from './components/MarketContainer'

//import DayOfWeekForm from './components/DayOfWeekForm'

class App extends Component {
  render() {
    return (
      <div className="App">

       <MarketContainer/>
       
      </div>
    );
  }
}

export default App;
