import ingredients from '../foodData/seasonalIngredients'

function getMonth(){
  let month = new Date().getMonth() + 1
  console.log(month)
  let season = ""
  if (month > 3 && month < 6){
  	season = "spring"
	} else if (month >= 6 && month < 10){
		season = "summer"
	} else if (month >= 10 && month < 12) {
		season = "fall"
	} else {
	  season = "winter"
	}
	return season
}


export function getIngredients(products_string){
	let food_array = []
	let season = getMonth()
	let current_object = ingredients[season]
	let ourIngredients = {
		vegetable: ingredients[season].vegetable,
		fruit: ingredients[season].fruit,
		herb: ingredients[season].herb,
		baked: "baked goods"
	}
	for(let key in ourIngredients){
		if(products_string.includes(key)){
			food_array.push(ourIngredients[key])
		}
	}
	
	return food_array
}




// based on the string, we want certain 
//ingredients to be returned in an array