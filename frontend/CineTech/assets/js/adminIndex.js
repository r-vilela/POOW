document.addEventListener("DOMContentLoaded", (event) => {
		tableElm = document.getElementById('table-container');

		createTable(tableElm, 'Films', films)

		var filmsElm = document.getElementById("films")
		var categoryElm = document.getElementById("categories")

		categoryElm.addEventListener("click", (event) => {
				pagination(event.target, filmsElm)
				const form = document.querySelector("#filmForm")

				async function sendData() {
						const formData = new FormData(form)

						try {
								const response = await fetch("https://example.org/post", {
										method:"POST",
										body: formData,
								});
								console.log(await response.json())
						} catch (e) {
								console.log(e);
						}
				}
				console.log(form)
				form.addEventListener("submit", (event) => {
						event.preventDefault()
						sendData()
				})
		})
		filmsElm.addEventListener("click", (event) => {
				pagination(event.target, categoryElm)
		})

})
