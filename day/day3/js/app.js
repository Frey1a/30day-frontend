const openModal = document.querySelector('.content__button')
const modal = document.querySelector('.content__modal')
const iconClose = document.querySelector('.modal__header i')
const closeButton = document.querySelector('.modal__footer--button')


openModal.addEventListener('click', togleModal)
closeButton.addEventListener('click', togleModal)
iconClose.addEventListener('click', togleModal)

function togleModal() {
	modal.classList.toggle("hiden")
}

