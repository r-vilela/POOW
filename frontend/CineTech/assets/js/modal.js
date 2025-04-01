function addModal(name){
		elm = document.getElementById("table-container");


		div = document.createElement("div");
		if(name === 'Films'){

				div.innerHTML = `
						<h4>${name}</h4>
						<div class="modal" id="myModal">
						<div class="modal-dialog">
						<div class="modal-content">

						<div class="modal-header bg-dark">
						<h4 class="modal-title fw-bold">Adding Film</h4>
						<button type="button" class="btn-close text-light" data-bs-dismiss="modal"></button>
						</div>

						<div class="modal-body bg-dark">
						<form id="categoryForm">

						<div class="form-group">
						<label for="filmTitle">Title</label>
						<input type="text" class="form-control" id="filmTitle" placeholder="Enter the film title">
						</div>

						<div class="form-group">
						<label for="filmDescription">Description</label>
						<input type="text" class="form-control" id="filmDescription" placeholder="Enter the film description">
						</div>
						
						<div class="form-group">
						<label for="filmGenre">Genre</label>
						<input type="text" class="form-control" id="filmGenre" placeholder="Enter the film genre">
						</div>

						<div class="form-group">
						<label for="filmCover">Cover</label>
						<input type="file" class="form-control" id="filmCover" placeholder="Enter the film cover">
						</div>

						<div class="form-group">
						<label for="filmTrailer">Link for Trailer</label>
						<input type="text" class="form-control" id="filmTrailer" placeholder="Enter the film link trailer">
						</div>

						<div class="form-group">
						<label for="filmLaunch">Launch Date</label>
						<input type="text" class="form-control" id="filmLaunch" placeholder="Enter the film launch date">
						</div>

						<div class="form-group">
						<label for="filmDuration">Duration</label>
						<input type="text" class="form-control" id="filmDuration" placeholder="Enter the film duration">
						</div>

						<button type="submit" class="btn btn-primary mt-2">Add Category</button>

						</form>
						</div>

						<div class="modal-footer bg-dark">
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
						</div>

						</div>
						</div>
						</div>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
						Open modal
						</button>`
		}else if (name === 'Categories') {
				div.innerHTML = `
						<h4>${name}</h4>
						<div class="modal" id="myModal">
						<div class="modal-dialog">
						<div class="modal-content">

						<div class="modal-header bg-dark">
						<h4 class="modal-title">Adding Category</h4>
						<button type="button" class="btn-close text-light" data-bs-dismiss="modal"></button>
						</div>

						<div class="modal-body bg-dark">
						<form id="catForm">

						<div class="form-group">
						<label for="catName">Name</label>
						<input type="text" class="form-control" id="catName" placeholder="Enter the category name">
						</div>

						<div class="form-group">
						<label for="catDescription">Description</label>
						<input type="text" class="form-control" id="catDescription" placeholder="Enter the category description">
						</div>

						<button type="submit" class="btn btn-primary mt-2">Add Category</button>

						</form>
						</div>

						<div class="modal-footer bg-dark">
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
						</div>

						</div>
						</div>
						</div>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
						Open modal
						</button>`
		}

		div.classList.add('d-flex')
		div.classList.add('align-items-center')
		div.classList.add('justify-content-between')

		elm.appendChild(div)
}
