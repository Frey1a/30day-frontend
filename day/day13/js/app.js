const inputImg = document.querySelector("#input-img")
const preview = document.querySelector(".preview")

inputImg.addEventListener("change", function (e) {
	var fileImg = inputImg.files[0]

	if (!fileImg) {
		return
	}
	if (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(fileImg.name)) {
		return
	}

	var img = document.createElement("img")
	img.src = URL.createObjectURL(inputImg.files[0])
	preview.appendChild(img)

})






