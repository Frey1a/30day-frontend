const form = document.querySelector('form')
const formControl = document.querySelectorAll('.form--control')
const userName = document.querySelector('#user-name')
const emailUser = document.querySelector('#email-user')
const passwordUser = document.querySelector('#password-user')
const confirmPassword = document.querySelector('#password-confirm')


var listAllInput = ([userName, emailUser, passwordUser, confirmPassword])
var listInfo = ["Username", "Email", "Passwords", "Confirm Password"]
var listPass = [listInfo[2], listInfo[3]]


function showError(input, message) {
	let parent = input.parentElement
	let small = parent.querySelector('small')

	parent.classList.remove('success')
	parent.classList.remove('warning')

	parent.classList.add('error')
	small.innerText = message
}

function showWarning(input, message) {
	let parent = input.parentElement
	let small = parent.querySelector('small')

	parent.classList.remove('error')
	parent.classList.remove('success')


	parent.classList.add('warning')


}

function showSuccess(input, message) {

	let parent = input.parentElement
	let small = parent.querySelector('small')

	parent.classList.remove('error')
	parent.classList.remove('warning')

	parent.classList.add('success')
	small.innerText = message

}
//check input
function checkEmptyError(listInput) {
	let isEmptyError = false
	listInput.forEach((input, index) => {
		input.value = input.value.trim()
		if (!input.value) {
			isEmptyError = true;
			showError(input, listInfo[index])
		}
	})
	return isEmptyError;
}

function checkEmail(input, key) {
	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	input.value.trim()
	let isEmailError = !regexEmail.test(input.value)
	if (isEmailError) {
		showError(input, listInfo[key] + " Invalid")
	}
	return isEmailError

}

function checkLengthError(input, min, max, key) {
	input.value = input.value.trim()
	if (input.value.length < min) {
		showError(input, listInfo[key] + " is too short")
		return true
	}
	if (input.value.length > max) {
		showError(input, listInfo[key] + " is too long")
		return true
	}
	return false
}


function checkMatchPassWord(passwordInput, cfPasswordInput) {
	if (passwordInput.value !== cfPasswordInput.value) {
		showError(cfPasswordInput, "Password does not match")
		return true
	}
	return false
}


form.addEventListener('submit', function (e) {
	e.preventDefault()

	listAllInput.forEach((input, key) => {
		showSuccess(input, listInfo[key] + " success!")
	})


	let isEmptyError = checkEmptyError([userName, emailUser, passwordUser, confirmPassword])

	let isEmailError = checkEmail(emailUser, 1)
	let isUesrNameError = checkLengthError(userName, 4, 16, 0)
	let isPasswordError = checkLengthError(passwordUser, 8, 20, 2)
	let isMatchError = checkMatchPassWord(passwordUser, confirmPassword)

	if (isMatchError || isPasswordError || isEmailError || isEmptyError || isUesrNameError) {
		//do nothing
	} else {
		//logic, some call API, ....
	}

})
