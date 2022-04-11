
const input = document.querySelector("form input")
const todos = document.querySelector(".todos")
const buttom = document.querySelector("form button")
const form = document.querySelector("form")
const iconRemoveTodo = document.querySelectorAll(".todos li i")



form.addEventListener("submit", function (event) {
	event.preventDefault()
	let valueInputTodo = input.value.trim()
	if (valueInputTodo) {
		addTodoElement({
			text: valueInputTodo,
		})

		saveTodoList()
	}
	input.value = ""
})


function addTodoElement(todo) {
	li = document.createElement("li")

	li.innerHTML = `
		<span>${todo.text}</span>
		<i class="fas fa-trash"></i>
	`


	li.setAttribute('class', todo.status == "completed" ? "completed" : "")

	li.addEventListener("click", function () {
		this.classList.toggle("completed")
	})
	li.querySelector("i").addEventListener("click", function () {
		this.parentElement.remove()
	})
	todos.appendChild(li)

}


function saveTodoList() {
	let todoList = document.querySelectorAll(".todos li")
	let todoStorage = []
	todoList.forEach(function (item) {
		let text = item.querySelector("span").innerText
		let status = item.getAttribute('class')

		todoStorage.push({
			text,
			status
		})
	})

	localStorage.setItem('todoList', JSON.stringify(todoStorage))
}


function init() {
	let data = JSON.parse(localStorage.getItem('todoList'))
	data.forEach(function (item) {
		addTodoElement(item)

	})
}
init()
