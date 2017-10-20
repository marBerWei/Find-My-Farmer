export function arrayMerge(arrayOfarrays){
    let merged = [].concat.apply([], arrayOfarrays)
    return merged
  }