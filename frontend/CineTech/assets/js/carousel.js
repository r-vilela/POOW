
async function listFilms(search = null) {
    prtElm = document.getElementById('carousel')

    prtElm.innerHTML = ''
    divContainer = document.createElement('div')
    divContainer.classList.add("carousel-inner")
    divContainer.classList.add("overflow-visible")
    divContainer.setAttribute("role", "listbox")

    let values = 0
    
    if(!search){
		values = await getFilms()
	} else {
		values = await getFilms(search)
	}
    
    values.forEach((value) => {
        div = document.createElement('div')
        div.innerHTML = `
            <div class="col-md-2 p-1 hover-item">
                <div onclick="addFilmModal(${value.id})" class="w-100 h-100">
                    <img src="file:///opt/lampp/htdocs/backend/src/${value.capa}" class="d-block w-100 h-100 object-fill-cover">
                </div>
            </div>
            `

        div.classList.add("carousel-item")

        if(divContainer.innerHTML == ''){
            div.classList.add("active")
        }

        divContainer.appendChild(div)
    })
        
    prtElm.appendChild(divContainer)
}
