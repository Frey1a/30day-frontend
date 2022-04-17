const imgShow = document.querySelector(".img-warp img")
const listImg = document.querySelectorAll(".list-images div img")
const listDiv = document.querySelectorAll(".list-img div")



const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let currentIndex = 0;

listImg.forEach((input, index) => {
	input.addEventListener("click", e => {
		currentIndex = index
		showImg()

	})
})

prev.addEventListener("click", function () {
	currentIndex -= 1
	if (currentIndex < 0) {
		currentIndex = 8
	}
	showImg()


})

next.addEventListener("click", function () {
	currentIndex += 1
	if (currentIndex > 8) {
		currentIndex = 0
	}
	showImg()


})

function showImg() {
	imgShow.style.opacity = "0"
	listImg.forEach(input => {
		input.parentElement.classList.remove("active")
	})

	setTimeout(function () {
		imgShow.style.opacity = "1"
		listImg[currentIndex].parentElement.classList.add("active")
		imgShow.src = listImg[currentIndex].getAttribute("src")

	}, 400)
}




