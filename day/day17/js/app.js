const listCount = document.querySelectorAll(".count")

listCount.forEach(input => {
	counting(input)

})
function counting(input) {
	let numberCount = input.querySelector(".count__number")
	let to = parseInt(numberCount.innerText)
	let count = 0
	let time = 144
	let step = to / time
	setInterval(function () {
		count += step
		if (count >= to) {
			clearInterval(counting)
			numberCount.innerText = to
		} else {
			numberCount.innerText = Math.round(count)

		}
	}, 1)
}




