async function getCat() {
    try {
		const response = await fetch("http://localhost/backend/public/generos", {
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
		   const url = "http://localhost/backend/public/filmes/buscar?query="
		   const response = await fetch(url + search, {
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
