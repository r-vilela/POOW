async function getFilms() {
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

document.addEventListener("DOMContentLoaded", async (event) => {
		tableElm = document.getElementById('table-container');

		const filmsList = await getFilms()

		createTable(tableElm, 'Films', filmsList)

		var filmsElm = document.getElementById("films")
		var categoryElm = document.getElementById("categories")

		categoryElm.addEventListener("click", async (event) => {
				pagination(event.target, filmsElm, await getCat())
				const form = document.querySelector("#catForm")

		})
		filmsElm.addEventListener("click", async (event) => {
				pagination(event.target, categoryElm, await getFilms())
				const form = document.querySelector("#filmForm")
				console.log(form)
		})

})
