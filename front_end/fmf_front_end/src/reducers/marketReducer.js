function marketReducer(state = { isFetching: false, list: []}, action) {
  switch (action.type) {
    case "FETCHED_MARKETS":
      return Object.assign({}, state, {list: action.payload, isFetching: false} )
    case "FETCHING_MARKETS":
      return Object.assign({}, state, { isFetching: true})
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