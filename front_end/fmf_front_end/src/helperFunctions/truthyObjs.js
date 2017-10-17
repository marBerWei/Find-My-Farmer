export function truthyObjs(obj){
	let array = []
	for(let key in obj){
		if(obj[key]){
			array.push(key)
		}
	}
	return array
}