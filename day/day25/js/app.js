const player = document.querySelector(".player")
const previewVideo = player.querySelector(".player__preview")
const playerControls = player.querySelector(".player__controls")
const video = player.querySelector(".player__video")
const progress = player.querySelector(".player__progress")
const progressBar = player.querySelector(".progress__bar")
const time = player.querySelector(".player__time")
const toggle = player.querySelector(".toggle")
const skipData = player.querySelectorAll("[data-skip]")
const volumeButton = player.querySelector(".volume__button")
const volumeBar = player.querySelector(".player__volume input")

//set default volume 
video.volume = volumeBar.defaultValue

setInterval(() => video.volume = volumeBar.value, 1)

//toggle play
function togglePlay() {
    if (video.paused) {
        video.play()
        toggle.innerHTML = "<i class='bx bx-pause' ></i>"
    } else {
        video.pause()
        toggle.innerHTML = "<i class='bx bx-play'></i>"
    }
}

//toggle volume
function toggleVolume() {
    if (volumeButton.id == "v_on") {
        var currentVolume = video.volume
        volumeButton.removeAttribute("id")
        volumeButton.setAttribute("id", "v_off")
        volumeButton.innerHTML = `<i class='bx bxs-volume-mute'></i>`
        volumeBar.value = 0
        video.volume = volumeBar.value
    } else if (volumeButton.id == "v_off") {
        volumeButton.removeAttribute("id")
        volumeButton.setAttribute("id", "v_on")
        volumeButton.innerHTML = `<i class='bx bxs-volume-full' ></i>`
        volumeBar.value = currentVolume
        video.volume = volumeBar.value
    }
}

//show control ì hover or event
function showControls() {
    playerControls.style.transform = "translateY(-100%)"

    let timeOutControls = setTimeout(function() {
        playerControls.style.transform = ""
    }, 3000)

    document.addEventListener("keydown", function() {
        clearTimeout(timeOutControls)
    })

}


//format show time
function formatTime(time) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)
    let minuteValue, secondValue

    minuteValue = minutes < 10 ? '0' + minutes : minutes
    secondValue = seconds < 10 ? '0' + seconds : seconds

    let mediaTime = minuteValue + ':' + secondValue
    return mediaTime
}



// show time
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percent}%`

    time.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(
		video.duration
	)}`
}

// function for click progress video
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}






// Evenlistener
// skipData.addEventListener

video.addEventListener('timeupdate', handleProgress)
video.addEventListener("click", togglePlay)


progress.addEventListener("click", scrub)


skipData.forEach((button) =>
    button.addEventListener('click', function() {
        video.currentTime += +this.dataset.skip
    })
)


document.addEventListener("keydown", function(e) {

    switch (e.which) {
        case 32:
            togglePlay()
            showControls()
            break;
        case 75:
            togglePlay()
            showControls()
            break;
        case 77:
            toggleVolume()
            showControls()

    }
})

toggle.addEventListener("click", togglePlay)

volumeBar.addEventListener("click", () => {
    video.volume = volumeBar.value
    volumeBar.defaultValue = video.volume
})


// volume
volumeButton.addEventListener("click", toggleVolume)

//hiden preVideo
previewVideo.addEventListener("click", () => {
    previewVideo.style.display = "none"
    video.classList.remove("hiden")
    playerControls.classList.remove("hiden")
    video.click()
})