export function makeArrayOfIngredients(our_string,our_object) {
    let array = []
    for(let key in our_object){
      if (our_string.includes(key)){
        array.push(our_object[key])
      }
    }
    return array
  }