const contentDefault = document.querySelector('.content__default')
const contentBox = document.querySelector('.content__box')
const eResult = document.querySelector('.box__result--text')
const eKey = document.querySelector('.box__key p:last-child')
const eLocation = document.querySelector('.box__location p:last-child')
const eWhich = document.querySelector('.box__which p:last-child')
const eCode = document.querySelector('.box__code p:last-child')


document.addEventListener('keydown', function (e) {
	let keyName = e.keyCode === 32 ? "Space" : e.key


	eResult.innerHTML = e.which
	eKey.innerHTML = keyName
	eLocation.innerHTML = e.location
	eWhich.innerHTML = e.which
	eCode.innerHTML = e.code
	hideDefault()


})





function hideDefault() {
	contentDefault.classList.add('hide')
	contentBox.classList.remove('hide')

}
function hideBox() {
	contentBox.classList.add('hide')
	contentDefault.classList.remove('hide')

}






