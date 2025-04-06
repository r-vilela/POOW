function addCat(){
  
    form = document.getElementById("catForm")
    form.addEventListener("submit", (e) => {
		e.preventDefault()

		const data = new FormData(form)

		fetch(url + "/generos", {
		    method: "POST",
		    body: data
		})
		.then(rsp => rsp.json())
		.then(data => {
				console.log("Success", data)
		})
		.catch(error => {
				console.error("Error", error)
		})
	})
   
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

async function updCat(id){
    form = document.getElementById("updCatForm")

    form.addEventListener("submit", (e) => {
		e.preventDefault()

		const data = new FormData(form)

		const dataURL = new URLSearchParams(data).toString()

		fetch(url + "/generos/" + id, {
		    method: "PUT",
		    body: dataURL
		})
		.then(rsp => rsp.json())
		.then(data => {
				console.log("Success", data)
		})
		.catch(error => {
				console.log("Error", error)
		})
	})
}
