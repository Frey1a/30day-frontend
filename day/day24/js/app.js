let container = document.querySelector(".container")
let squares = 200

for (let i = 0; i < squares; i++) {
	let square = document.createElement("div")
	square.classList.add("square")

	//animation
	square.addEventListener("mouseover", () => setColor(square))
	square.addEventListener("mouseout", () => removeColor(square))

	container.appendChild(square)
}

function setColor(element) {
	const color = getColorRandom()
	element.style.background = `${color}`
	element.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`

}

function removeColor(element) {
	element.style.background = "#1c1a1a"
	element.style.boxShadow = `0 0 2px #000000`

}


function getColorRandom() {
	let letters = "0123456789ABCDEF"
	let color = "#"
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	return color
}



