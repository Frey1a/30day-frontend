let boxes = document.querySelectorAll(".box")
let listTarget = document.querySelectorAll(".target")

let currentTarget = null

listTarget.forEach(target => {
	target.addEventListener("dragstart", function (e) {
		this.classList.add("dragging")
		currentTarget = this
	})
	target.addEventListener("dragend", function (e) {
		this.classList.remove("dragging")
	})


})

boxes.forEach(box => {


	box.addEventListener("dragover", function (e) {
		e.preventDefault()
		if (!box.querySelector(".target")) {
			this.appendChild(currentTarget)
		}

	})
	box.addEventListener("drop", function (e) {
		if (!box.querySelector(".target")) {
			this.appendChild(currentTarget)
		}

	})

})
