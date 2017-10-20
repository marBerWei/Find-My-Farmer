//const OG_ingredients = {fruit: ["apple", "pears"], vegetable: ["carrot", "lettuce"]}

//const selectedIngredients = "apple, carrot"
// we start with a string of data
// split string into an array 
// map over array
    // iterate over OG ingredients to see if obj[key].includes(ingredient)
    // return key
export function getArrayOfKeys(string,obj){
  console.log(string)
  let ingredientArray = string.split(",") // make sure to handle space
  let array = []
  let arrayOfKeys = ingredientArray.forEach(ingredient => {
    console.log(ingredient)
    // for each ingredient, check to see which category it comes from
    // create a new obj with the ingredient as the key
    for(let key in obj){
      //console.log(key)
      if (obj[key].includes(ingredient)) {
        array.push(key)
      }
    }
  })
  return array
}
// gives us an array of categories

//const ingreeds = getArrayOfKeys(selectedIngredients,OG_ingredients)


//console.log(ingreeds)

//getMarketObject(ingreeds, market_list)

