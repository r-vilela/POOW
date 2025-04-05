function addModal(name) {
  elm = document.getElementById("table-container");

  div = document.createElement("div");
  if (name === "Films") {
    div.innerHTML = `
	  <h4>${name}</h4>
	  <div class="modal fade" id="myModal" tabindex="-1">
		<div class="modal-dialog">
		  <div class="modal-content">
  
			<div class="modal-header bg-dark">
			  <h4 class="modal-title fw-bold">Adicionar Filme</h4>
			  <button type="button" class="btn-close text-light" data-bs-dismiss="modal"></button>
			</div>
  
			<div class="modal-body bg-dark">
			  <form id="filmForm" method="POST" enctype="multipart/form-data">
				
				<div class="form-group">
				  <label for="filmTitle">Título</label>
				  <input type="text" class="form-control" id="filmTitle" name="titulo" required>
				</div>
  
				<div class="form-group">
				  <label for="filmDescription">Descrição</label>
				  <input type="text" class="form-control" id="filmDescription" name="sinopse" required>
				</div>
  
				<div class="form-group">
				  <label for="filmGenre">Gênero (ID)</label>
				  <input type="number" class="form-control" id="filmGenre" name="genero_id" required>
				</div>
  
				<div class="form-group">
				  <label for="filmCover">Capa</label>
				  <input type="file" class="form-control" id="filmCover" name="capa" accept="image/*" required>
				</div>
  
				<div class="form-group">
				  <label for="filmTrailer">Link do trailer</label>
				  <input type="text" class="form-control" id="filmTrailer" name="trailer_url">
				</div>
  
				<div class="form-group">
				  <label for="filmLaunch">Data de lançamento</label>
				  <input type="date" class="form-control" id="filmLaunch" name="data_lancamento" required>
				</div>
  
				<div class="form-group">
				  <label for="filmDuration">Duração</label>
				  <input type="text" class="form-control" id="filmDuration" name="duracao" required>
				</div>
  
				<button type="submit" class="btn btn-success mt-3">Adicionar Filme</button>
			  </form>
			</div>
  
			<div class="modal-footer bg-dark">
			  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
			</div>
  
		  </div>
		</div>
	  </div>
  
	  <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#myModal">
		Adicionar Filme
	  </button>
	`;
  } else if (name === "Categories") {
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
						</button>`;
  }

  div.classList.add("d-flex");
  div.classList.add("align-items-center");
  div.classList.add("justify-content-between");

  elm.appendChild(div);
}

// function setupAddFilmForm() {
//   const form = document.getElementById("filmForm");
//   if (!form) return; // se ainda não foi adicionado

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formData = new FormData(form);

//     fetch("http://localhost/poow/backend/public/filmes", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         alert(res.message || "Filme adicionado com sucesso!");
//         const modalEl = document.getElementById("myModal");
//         const modal = bootstrap.Modal.getInstance(modalEl);
//         if (modal) modal.hide();
//         location.reload();
//       })
//       .catch((err) => {
//         console.error("Erro ao adicionar filme:", err);
//         alert("Erro ao adicionar filme.");
//       });
//   });
// }

function addFilmModal() {
  prtElm = document.getElementById("carousel");
  elm = document.createElement("div");

  elm.innerHTML = `
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
		<div class="modal-header">
		<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">&times;</span>
		</button>
		</div>
		<div class="modal-body">
		...
		</div>
		<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		<button type="button" class="btn btn-primary">Save changes</button>
		</div>
		</div>
		</div>
		</div>
    `;
  prtElm.appendChild(elm);
}
