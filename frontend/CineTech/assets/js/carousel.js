
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
                    <img src="${value.cover}" class="d-block w-100">
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

document.addEventListener("DOMContentLoaded", (event) => {
    carouselElm = document.getElementById("carousel");
    
    listFilms(carouselElm, films)

    let items =document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i = 1; i<minPerSlide;i++) {
            if(!next) {
                next = items[0]
            }
            let clone = next.cloneNode(true)
            el.appendChild(clone.children[0])
            next = next.nextElementSibling
        }
    })
})
