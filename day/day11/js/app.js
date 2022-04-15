const controlButton = document.querySelectorAll(".control button")
const toasts = document.querySelector(".toasts")

controlButton.forEach((input) => {
	input.addEventListener("click", function () {
		createToast(input.innerHTML)
	})
})

function createToast(input) {
	let templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
	 		<span class="msg">This is a error message!</span>
	 		<span class="countdown cd-error"></span>
`
	let status = "success"
	switch (input) {
		case "Show Success":
			templateInner = `<i class="fa-solid fa-circle-check"></i>
	 		<span class="msg">This is a success message!</span>
	 		<span class="countdown cd success"></span>
`
			status = "success"

			break;
		case "Show Warning":
			templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
	 		<span class="msg">This is a warning message!</span>
	 		<span class="countdown cd-warning"></span>
`
			status = "warning"
			break;
		case "Show Error":
			templateInner = `	<i class="fa-solid fa-triangle-exclamation"></i>
	 		<span class="msg">This is a error message!</span>
	 		<span class="countdown cd-error"></span>
`
			status = "error"
			break;
	}

	let toast = document.createElement("div")
	console.log(toast)
	toast.classList.add("toast")
	toast.classList.add(status)
	toast.innerHTML = templateInner
	setTimeout(function () {
		toast.style.animation = "slideDown 1s ease forwards"
		setTimeout(function () {
			toasts.removeChild(toast)
		}, 1500)
	}, 3800)

	toasts.appendChild(toast)

}

function removeToast() {

}



