const openSearch = document.querySelector('.search-box')
const iconSearch = document.querySelector('.search-btn')

iconSearch.addEventListener('click', toggleSearch)

function toggleSearch() {
	openSearch.classList.toggle('open-search')
}


