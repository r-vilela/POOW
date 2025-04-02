async function getFilms(search=null) {
    if(!search) {
		try {
		    const response = await fetch("http://localhost/backend/public/filmes", {
				method:"GET"
		    })
		    if(!response.ok) {
				throw new Error(`Responde status: ${response.status}`)
		    }

		    const json = await response.json()
		    return json
		} catch (e) {
		    console.log(e.message)
		}

	} else {
		try {
		    const response = await fetch("http://localhost/backend/public/filmes", {
				method:"GET"
		    })
		    if(!response.ok) {
				throw new Error(`Responde status: ${response.status}`)
		    }

		    const json = await response.json()
		    return json
		} catch (e) {
		    console.log(e.message)
		}

	}
}

document.addEventListener("DOMContentLoaded", async (event) => {
    await listFilms()

    let items = document.querySelectorAll('.carousel .carousel-item')

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
