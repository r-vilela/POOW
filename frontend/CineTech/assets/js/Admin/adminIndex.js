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
