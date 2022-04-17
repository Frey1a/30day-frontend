const rangeBar = document.querySelector(".ranger-bar")
const range = document.querySelector(".ranger")

const body = document.querySelector("body")

function updateWidth(percent) {
	rangeBar.style.width = `${percent}%`
}
function updateBackground(percent) {
	alphaColor = percent / 100
	body.style.background = `rgba(0,0,0,${alphaColor})`
}

range.addEventListener("mousemove", function (event) {
	var processWidth = event.pageX - this.offsetLeft
	var percent = processWidth / this.offsetWidth * 100
	percent = Math.round(percent)

	updateWidth(percent)
	updateBackground(percent)


})






















