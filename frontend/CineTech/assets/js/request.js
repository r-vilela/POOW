const url = "http://localhost/backend/public"
async function getCat(search=null) {
    if (!search) {
		try {
		    const response = await fetch(url + "/generos", {
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
		    const response = await fetch(url + "/generos", {
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

async function getFilms(search=null) {
    if(!search) {
		try {
		   const response = await fetch(url + "/filmes", {
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
		   const response = await fetch(url + "/filmes/buscar?query=" + search, {
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

async function getFilmeId(id){
    try{
		const response = await fetch(url + "/filmes/" + id,{
				method: "GET"
		})
		if(!response.ok){
		    throw new Error(`Response status: ${response.status}`)
		}

		const json = await response.json()
		return json
 	} catch (e) {
			console.log(e.message)
	}
}

async function getCatId(id){
    try{
		const response = await fetch(url + "/generos/" + id,{
				method: "GET"
		})
		if(!response.ok){
		    throw new Error(`Response status: ${response.status}`)
		}

		const json = await response.json()
		return json
 	} catch (e) {
			console.log(e.message)
	}
}

async function delCat(id){
    try{
		const response = await fetch(url + "/generos/" + id,{
				method: "DELETE"
		})
		if(!response.ok){
		    throw new Error(`Response status: ${response.status}`)
		}

		const json = await response.json()
		return json
 	} catch (e) {
			console.log(e.message)
	}
}
