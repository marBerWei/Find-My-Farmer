import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// import usersReducer from './reducers/usersReducer'
// import booksReducer from './reducers/booksReducer'
import { fetchMarkets } from './actions/markets'
import { Provider } from 'react-redux'
//import { addBook, fetchBooks } from './actions/books'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import marketReducer from './reducers/marketReducer'
import dayOfWeekReducer from './reducers/dayOfWeekReducer'

const rootReducer = combineReducers({markets: marketReducer, dow: dayOfWeekReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

