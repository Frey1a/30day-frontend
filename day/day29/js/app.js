const button = document.querySelectorAll(".wrapper button")

button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const audio = e.target.querySelector("audio")
        playAudio(audio)

    })
})

function playAudio(audio) {
    const clone = audio.cloneNode()
    clone.play()
    setTimeout(() => { clone.volume = 0.8 }, 400);
    setTimeout(() => { clone.volume = 0.6 }, 800);
    setTimeout(() => { clone.volume = 0.4 }, 1200);
    setTimeout(() => { clone.volume = 0.8 }, 1600);
    setTimeout(() => { clone.volume = 0 }, 2000);


}

document.addEventListener("keydown", (e) => {
    const btn = document.querySelector(`.key-${e.key}`)

    btn && btn.click() // if (btn) => click event
})