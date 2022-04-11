
const screen = document.querySelector("#screen")
const container = document.querySelector("#container")
const searchInput = document.querySelector("#container input")
const city = document.querySelector(".city")
const country = document.querySelector('.country')
const time = document.querySelector(".time")
const valueTemp = document.querySelector(".temp__value")
const shortDesc = document.querySelector(".short-desc")
const spanMoreDesc = document.querySelectorAll(".more-desc span")

//run 
changeWeather("ari")

searchInput.addEventListener("keydown", function (e) {
	let valueSearch = searchInput.value.trim()
	if (e.key == "Enter") {
		nameCity = valueSearch
		changeWeather(nameCity)

		//clear forcus
		searchInput.value = ""
	}
})


// get API
async function changeWeather(inputName) {
	let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=f7c525dd754303ac40be5703f95606d5`

	let data = await fetch(apiURL).then(res => res.json())

	floorTemp = Math.floor(data.main.temp - 273.15)
	floorTemp <= 18 ? coldTemp() : hotTemp()

	//innerHTML
	city.innerHTML = data.name
	country.innerHTML = data.sys.country
	// time.innerHTML = data.
	valueTemp.innerHTML = floorTemp

	shortDesc.innerHTML = data.weather[0].main

	spanMoreDesc[0].innerHTML = data.visibility + " (m)"
	spanMoreDesc[1].innerHTML = data.wind.speed + " (m/s)"
	spanMoreDesc[2].innerHTML = data.clouds.all + " (%)"


}

function coldTemp() {
	container.classList.remove("hot")
	screen.classList.remove("screen__hot")
	container.classList.add("cold")
	screen.classList.add("screen__cold")
}
function hotTemp() {
	container.classList.remove("cold")
	screen.classList.remove("screen__cold")
	container.classList.add("hot")
	screen.classList.add("screen__hot")

}

//running now time
setInterval(function () {time.innerHTML = new Date().toLocaleString()}, 1000)
