
function listFilms(prtElm, values) {
    prtElm.innerHTML = ''
    divContainer = document.createElement('div')
    divContainer.classList.add("carousel-inner")
    divContainer.classList.add("overflow-visible")
    divContainer.setAttribute("role", "listbox")
    
    values.forEach((value) => {
        div = document.createElement('div')
        div.innerHTML = `
            <div class="col-md-2 p-1 hover-item">
                <div class="w-100 h-100">
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
