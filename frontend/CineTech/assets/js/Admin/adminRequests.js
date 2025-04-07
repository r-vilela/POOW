function addCat(){
  
    form = document.getElementById("catForm")
    form.addEventListener("submit", (e) => {
		e.preventDefault()

		console.log(this)

		const data = new FormData(form)

		console.log(data)
		fetch("http://localhost/backend/public/generos", {
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
 
