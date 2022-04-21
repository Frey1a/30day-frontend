// call default value

let color = document.querySelector("#header__color")
let eraser = document.querySelector("#eraser")
let sizePen = document.querySelector("#size")
let sizeDown = document.querySelector("#size__down")
let sizeUp = document.querySelector("#size__up")
let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
let clearCanvas = document.querySelector("#clear__canvas")
let saveButtom = document.querySelector("#save__buttom")

let colorPen

let isDrawing = false

let size = 10;
//set value pos1 and pos2

let pos1 = {
	x: 0,
	y: 0,
}
let pos2 = {
	x: 0,
	y: 0,

}




//clear canvas
clearCanvas.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//click size down  event
sizeDown.addEventListener("mousedown", () => {
	if (size > 5) {
		size -= 5
	} else {
		size = 5
	}

	setSize()

}
)

sizeUp.addEventListener("mousedown", () => {
	if (size < 50) {
		size += 5
	} else {
		size = 50
	}

	setSize()
})



// change color pen
color.addEventListener("change", () => {
	colorPen = `${color.value}`

})

//add event when mouse down

document.addEventListener("mousedown", (e) => {
	pos1 = {
		x: e.offsetX,
		y: e.offsetY
	}
	isDrawing = true

})
document.addEventListener("mousemove", function (e) {

	if (isDrawing) {
		pos2 = {
			x: e.offsetX,
			y: e.offsetY
		}

		// 		pour until it's full
		ctx.beginPath();
		ctx.arc(pos1.x, pos1.y, size / 2, 0, 2 * Math.PI);
		ctx.fill()

		ctx.beginPath()
		ctx.strokeStyle = colorPen
		ctx.moveTo(pos1.x, pos1.y)
		ctx.lineTo(pos2.x, pos2.y)
		ctx.lineWidth = size
		ctx.stroke()

		pos1.x = pos2.x
		pos1.y = pos2.y

	}
})

document.addEventListener("mouseup", function (e) {
	isDrawing = false

})

eraser.addEventListener("click", () => {
	colorPen = "#ffffff"

})

function setSize() {
	sizePen.innerHTML = size
}
setSize()


