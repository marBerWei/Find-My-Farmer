export function unique (array) {
  let uniq = []
  array.forEach(el => {
    if(!(uniq.includes(el))){
      uniq.push(el)
    }
  })
  return uniq
}