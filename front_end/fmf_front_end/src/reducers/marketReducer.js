function marketReducer(state = { isFetching: false, markets: []}, action) {
  switch (action.type) {
    case "FETCHED_MARKETS":

    	if (state.markets.length < 3) {
    		const newMarkets = [...state.markets, action.payload]
    		return Object.assign({}, state, {markets: newMarkets, isFetching: false} )
    	} else {
    		return Object.assign({}, state, {markets: [action.payload], isFetching: false} )
    	}
      
    case "FETCHING_MARKETS":
      return Object.assign({}, state, { isFetching: true})
    // case "FETCHING_PRODUCTS":
    //   return Object.assign({}, state, { isFetching: true})
    // case "FETCHED_PRODUCTS":
    //   return Object.assign({}, state, {products: action.payload, isFetching: false} )
    default:
      return state
  }
}


export default marketReducer






















// cart: []
 // case "ADD_BOOK":
 //      return Object.assign({}, state, {list: [...state.list, {title: action.payload}]})
 //    case "ADD_TO_CART":
 //      return Object.assign({}, state, {cart: [...state.cart, action.payload]})
 //    case "REMOVE_BOOK":
 //      return Object.assign({}, state, {list: state.list.filter((book) => book.id !== action.payload)})