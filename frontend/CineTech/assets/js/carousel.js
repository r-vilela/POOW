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
