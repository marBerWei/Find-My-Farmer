import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
//import createHistory from 'history/createBrowserHistory'
//import { Route, Switch } from 'react-router'
//import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fetchMarkets } from './actions/markets'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import marketReducer from './reducers/marketReducer'
import dayOfWeekReducer from './reducers/dayOfWeekReducer'
import loginReducer from './reducers/loginReducer'
import ingredientReducer from './reducers/ingredientReducer'
import recipeReducer from './reducers/recipeReducer'



const rootReducer = combineReducers({markets: marketReducer, dow: dayOfWeekReducer, login: loginReducer, ingredients: ingredientReducer, recipes: recipeReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, 
  document.getElementById('root'));
registerServiceWorker();


// import { connect  } from 'react-redux'
// // Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()
// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)
// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// const ConnectedSwitch = connect(state => ({
//   location: state.location
// }))(Switch);