
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


                const new_market = {
                    marketId: market.id, 
                    name: market.marketname, 
                    address: json.marketdetails.Address, 
                    googleLink: json.marketdetails.GoogleLink,
                    products: json.marketdetails.Products,
                    schedule: json.marketdetails.Schedule 
                }

                dispatch(fetchedMarkets(new_market))

            }); 
          });

        })
    }
}