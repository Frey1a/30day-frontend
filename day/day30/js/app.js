const wrapper = document.querySelector(".wrapper")
let isMouseDown = false
let startX, scrollLeft
let speedScroll = 3



wrapper.addEventListener("mousedown", (e) => {
	isMouseDown = true
	startX = e.pageX - wrapper.offsetLeft
	scrollLeft = wrapper.scrollLeft
})

wrapper.addEventListener('mouseleave', () => {
	isMouseDown = false
})

wrapper.addEventListener('mouseup', () => {
	isMouseDown = false
})

wrapper.addEventListener("mousemove", (e) => {
	if (!isMouseDown) return

	const x = e.pageX - wrapper.offsetLeft


	const walk = (x - startX) * speedScroll
	wrapper.scrollLeft = scrollLeft - walk

})





