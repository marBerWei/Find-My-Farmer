export function getMarketObject(arrayOfCategories, arrayOfMarkets){
  const array = []
  arrayOfCategories.forEach(category => {
    arrayOfMarkets.forEach(market => {
      if(market.products.includes(category) && !(array.includes(market))){
        array.push(market)
      }
    })
  })
  return array
}