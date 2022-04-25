const player = document.querySelector(".player")
const video = document.querySelector(".player__video")
const progess = document.querySelector(".player__progess")
const progessBar = document.querySelector(".progess__bar")

const toggle = document.querySelector(".toggle")
const skipData = document.querySelectorAll("[data-skip]")
const volumeButton = document.querySelector("player__volume i")
const volumeBar = document.querySelector(".player__volume input")


function togglePlay() {
	if (video.paused) {
		video.play()
		toggle.innerHTML = "<i class='bx bx-pause' ></i>"
	} else {
		video.pause()
		toggle.innerHTML = "<i class='bx bx-play'></i>"
	}
}




