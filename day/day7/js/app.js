const inputText = document.querySelector('.box__note input')
const boxSave = document.querySelector('.box__save')
const removeButton = document.querySelector('.box__button')


var tags = ['Nodejs', 'ReactJS']

renderTags()

function renderTags() {
	boxSave.innerHTML = ''
	for (let i = 0; i < tags.length; i++) {
		const tag = tags[i]
		boxSave.innerHTML += `<li>${tag}<i class="uit uit-multiply" onclick="removeTag(${i})"></i></li>`
	}
}

function removeTag(index) {
	tags.splice(index, 1)
	renderTags()
}


inputText.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		console.log("event.keycode")
		tags.push(inputText.value.trim())
		renderTags()
		inputText.value = ''

	}
})

removeButton.addEventListener('click', function () {
	tags = []
	renderTags()
})





