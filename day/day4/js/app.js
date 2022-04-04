const listImage = document.querySelectorAll('.image img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const close = document.querySelector('.close-icon')
const pickImage = document.querySelector('.gallery__inner img')
const gallery = document.querySelector('.gallery')

let currentIndex = 0

function showImg() {
	pickImage.src = listImage[currentIndex].src
	gallery.classList.add('show')

}

listImage.forEach((item, index) => {
	item.addEventListener('click', function () {
		currentIndex = index
		if (currentIndex == 0) {
			prev.classList.add('hiden')
		} else {
			prev.classList.remove('hiden')
		}
		if (currentIndex == 7) {
			next.classList.add('hiden')
		} else {
			next.classList.remove('hiden')
		}
		showImg()
	})
})
close.addEventListener('click', removeShow)
prev.addEventListener('click', prevImage)
next.addEventListener('click', nextImage)

function removeShow() {
	gallery.classList.remove('show')
}

function prevImage() {
	if (currentIndex > 0) {
		currentIndex--
	}
	showImg()
	if (currentIndex == 0) {
		prev.classList.add('hiden')
	} else {
		prev.classList.remove('hiden')
		next.classList.remove('hiden')
	}

}

function nextImage() {
	if (currentIndex < 7) {
		currentIndex++
	}
	showImg()
	if (currentIndex == 7) {
		next.classList.add('hiden')
	} else {
		prev.classList.remove('hiden')
		next.classList.remove('hiden')
	}

}

document.addEventListener('keydown', function (e) {
	if (e.keyCode == 27) {
		removeShow()
	}
})





























