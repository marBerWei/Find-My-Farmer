function getSeason(){
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

export default getSeason