
function listFilms(data) {
	const prtElm = document.getElementById('carousel')

	prtElm.innerHTML = ''
	const divContainer = document.createElement('div')
	divContainer.classList.add("carousel-inner")
	divContainer.classList.add("overflow-visible")
	divContainer.setAttribute("role", "listbox")

	if (data.length === 0) {
		prtElm.innerHTML =
			'<div class="d-flex align-items-center justify-content-center"><h4>Nenhum filme cadastrado.</h4></div>';
		return;
	}

	data.forEach((filme) => {
		div = document.createElement('div')
		div.innerHTML = `
			<div class="col-md-2 p-1 hover-item">
				<div onclick="addFilmModal(${filme.id})" class="hover w-100 h-100">
					<img src="file:///opt/lampp/htdocs/poow/backend/src/${filme.capa}" class="d-block w-100 h-100 object-fill-cover">
				</div>
			</div>
			`

		div.classList.add("carousel-item")

		if(divContainer.innerHTML == ''){
			div.classList.add("active")
		}

		divContainer.appendChild(div)
	});
	prtElm.appendChild(divContainer)
}
