export function giantString(array_of_objects){
   let string = ''
    array_of_objects.map(obj => {
      string+= obj.products
    })
   return string
}