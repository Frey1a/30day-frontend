const imgShow = document.querySelector(".img-warp img")
const listImg = document.querySelectorAll(".list-images div img")

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

prev.addEventListener("click", changeImage())
next.addEventListener("click", changeImage())

function changeImage() {

	listImg.forEach((input, key) => {
		input.setAttribute("class", "active")
	})


}

