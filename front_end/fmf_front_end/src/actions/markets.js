
export function fetchedMarkets(markets) {
  return {
    type: "FETCHED_MARKETS",
    payload: markets
  }
}

export function fetchingMarkets() {
  return {
    type: "FETCHING_MARKETS"
  }
}

export function fetchMarkets(zip) {
  return function(dispatch) {
    dispatch(fetchingMarkets())
    fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
      .then((res) => res.json())
      .then((data) => {
        const markets = data.results
        console.log(markets)
        dispatch(fetchedMarkets(markets))
      })
  }
}

// fetch(url)
// .then(function(response) { 
//   return response.json()
// })
// .then(function(data) {   
//   // do stuff with `data`, call second `fetch`
//   return fetch(data.anotherUrl)
// })
// .then(function(response) { 
//   return response.json(); 
// })
// .then(function(data) {
//   // do stuff with `data`
// })
// .catch(function(error) { 
//   console.log('Requestfailed', error) 
// });