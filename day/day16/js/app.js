const listScroll = document.querySelectorAll(".show-scroll")
const divHome = document.querySelector("#home div")
setTimeout(function () {
	divHome.classList.add("start")
}, 500)

window.onscroll = runScrool

function showElementScroll(element) {
	let rect = element.getClientRects()[0]
	let windowHeight = window.innerHeight
	if (!(rect.bottom < 0 || rect.top > windowHeight)) {
		element.classList.add("start")

	} else {
		element.classList.remove("start")
	}


}
function runScrool() {
	listScroll.forEach(input => {
		showElementScroll(input)
	})

}






