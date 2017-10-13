export function parseSchedule(string){
	let lowercase = string.toLowerCase().split(" ")
	console.log(lowercase)
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
				console.log(lowercase[i])
				array.push(obj[day])
			} 
		}
	}
	console.log(array)
	return array
}


// let array = []
// 	let lowercase = string.toLowerCase()
// 	let i = 0
// 	while(i <= lowercase.length) {
// 		if (lowercase.includes("mon")) {
// 			array.push("Monday")
// 		} else if(lowercase.includes("tue")){
// 			array.push("Tuesday")
// 		}else if(lowercase.includes("wed")){
// 			array.push("Wednesday")
// 		}else if(lowercase.includes("thu")){
// 			array.push("Thursday")
// 		}else if(lowercase.includes("fri")){
// 			array.push("Friday")
// 		}else if(lowercase.includes("sat")){
// 			array.push("Saturday")
// 		}else if(lowercase.includes("sun")){
// 			array.push("Sunday")
// 		} else {
// 			array = "No Days"
// 		}
		
// 	i++
// 	}
// 	return array