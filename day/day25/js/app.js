const player = document.querySelector(".player")
const playerControls = player.querySelector(".player__controls")
const video = player.querySelector(".player__video")
const progess = player.querySelector(".player__progess")
const progessBar = player.querySelector(".progess__bar")

const toggle = player.querySelector(".toggle")
const skipData = player.querySelectorAll("[data-skip]")
const volumeButton = player.querySelector("player__volume i")
const volumeBar = player.querySelector(".player__volume input")


function togglePlay() {
	if (video.paused) {
		video.play()
		toggle.innerHTML = "<i class='bx bx-pause' ></i>"
	} else {
		video.pause()
		toggle.innerHTML = "<i class='bx bx-play'></i>"
	}
}
console.log(skipData)
console.dir(video)
console.dir(volumeBar)

function showControls() {
	playerControls.style.transform = "translateY(-100%)"

	let timeOutControls = setTimeout(function () {
		playerControls.style.transform = ""
	}, 3000)

	document.addEventListener("keydown", function () {
		clearTimeout(timeOutControls)
	})

}

function formatTime(time) {
	let second = Math.floor(time / 60)
	let miniute = Math.floor(time - second * 60)
	let miniuteValue, secondValue
	miniuteValue = miniute < 10 ? "0" + miniute : miniute
	secondValue = secondValue < 10 ? "0" + secondValue : miniute
	let mediaTime = miniuteValue + ":" + secondValue
	return mediaTime

}

function changeVolume(key) {
	let valueVolume = volumeBar.value
	let currentValue = 0.1
	switch (key) {
		case key == 38:
			valueVolume += currentValue
			break;
		case key == 40:
			valueVolume -= currentValue
			break
	}
	video.volume = valueVolume


}

// Evenlistener
// skipData.addEventListener
video.addEventListener("click", togglePlay)
document.addEventListener("keydown", function (e) {
	if (e.which == 32) {
		player.onmouseover
		togglePlay()
		showControls()
	} else if (e.which == 75) {
		togglePlay()
		showControls()
	} else if (e.which == 40) {
		changeVolume(e.which)
	} else if (e.which == 38) {
		changeVolume(e.which)
	}
})
toggle.addEventListener("click", togglePlay)
volumeBar.addEventListener("change", () => {
	video.volume = volumeBar.value
})




