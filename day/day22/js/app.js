let btnFoods = document.querySelectorAll(".food-menu button")
let itemFoods = document.querySelectorAll(".food-item")

btnFoods.forEach(btn => {
	btn.addEventListener("click", (e) => {
		let type = e.target.getAttribute("type-food")

		document.querySelector(".food-menu .active").classList.remove("active")
		btn.classList.add("active")

		itemFoods.forEach(item => {
			let typeItem = item.getAttribute("type-food")
			item.classList.add("hide")

			if (type == "all" || typeItem == type) {
				item.classList.remove("hide")
			}
		})
	})
})
