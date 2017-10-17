export function parseSchedule(string){
	let lowercase = string.toLowerCase().split(" ")
	//console.log(lowercase)
	let array = []
	let obj = {
		sun: " Sunday",
		mon: " Monday",
		tue: " Tuesday",
		wed: " Wednesday",
		thu: " Thursday",
		fri: " Friday",
		sat: " Saturday"
	}
	for(let day in obj){
		
		for(let i = 0; i < lowercase.length; i++){
			
			if(lowercase[i].includes(day) && !(array.includes(obj[day]))){
				//console.log(lowercase[i])
				array.push(obj[day])
			} 
		}
	}
	//console.log(array)
	return array
}
