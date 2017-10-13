
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

// export function fetchedProducts(products) {
//   return {
//     type: "FETCHED_PRODUCTS",
//     payload: products
//   }
// }

// export function fetchingProducts() {
//   return {
//     type: "FETCHING_PRODUCTS"
//   }
// }

// export function fetchMarkets(zip) {
//   return function(dispatch) {
//     dispatch(fetchingMarkets())
//     fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const markets = data.results.slice(0,3)
//         console.log(markets)
//         dispatch(fetchedMarkets(markets))
//     })
//   }
// }

export function fetchMarkets(zip) {
  return function(dispatch) {
    dispatch(fetchingMarkets())
    fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
        .then((res) => res.json())
        .then((data) => {
          const markets = data.results.slice(0,3)
          //let details = []
          markets.forEach(function(market) {
            fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${market.id}`)
              .then((res) => res.json())
              .then((json) => {
                // details.push({marketId: market.id, 
                //     name: market.marketname, 
                //     address: json.marketdetails.Address, 
                //     googleLink: json.marketdetails.GoogleLink,
                //     products: json.marketdetails.Products 
                //   })


                const new_market = {
                    marketId: market.id, 
                    name: market.marketname, 
                    address: json.marketdetails.Address, 
                    googleLink: json.marketdetails.GoogleLink,
                    products: json.marketdetails.Products 
                }
                console.log(new_market)

                dispatch(fetchedMarkets(new_market))
                console.log("marketdetails results:", json.marketdetails )
                //console.log("details are",details)
            }); 
          });

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