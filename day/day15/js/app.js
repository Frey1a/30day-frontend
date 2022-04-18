const products = document.querySelector(".products")
const input = document.querySelector("header input")



fetch('https://fakestoreapi.com/products')
	.then(res => res.json())
	.then(data => {
		products.innerHTML = ""
		data.forEach(item => {
			createProduct(item.image, item.title, item.price)
		})
	})


input.addEventListener("input", function (e) {
	let txtSearch = e.target.value.trim().toLowerCase()
	let listproduct = document.querySelectorAll(".product")
	listproduct.forEach(item => {
		if (item.innerText.toLowerCase().includes(txtSearch)) {
			item.classList.remove("hide")
		} else {
			item.classList.add("hide")
		}
	})
})


function createProduct(imgSrc, name, price) {
	let product = document.createElement("div")
	products.style.overflow = "scroll"
	product.classList.add("product")
	product.innerHTML = `				<img src="${imgSrc}" alt="">
				<div class="product-detail">
					<h4>${name}</h4>
					<p>$${price}</p>
				</div>
`
	products.append(product)
}




