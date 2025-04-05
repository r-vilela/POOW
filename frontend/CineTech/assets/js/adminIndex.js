document.addEventListener("DOMContentLoaded", () => {
  const filmsBtn = document.getElementById("films");
  const categoriesBtn = document.getElementById("categories");
  const tableContainer = document.getElementById("table-container");

  let currentView = "";
  let modalAdded = false;

  // Carregar filmes inicialmente
  fetch("http://localhost/poow/backend/public/filmes")
    .then((res) => res.json())
    .then((data) => {
      createTable(tableContainer, "Films", data);
      if (!modalAdded) {
        addTopControls("Films");
        addEditModal();
        addModal("Films");
        setupAddFilmForm();
        modalAdded = true;
      }
    });

  filmsBtn.addEventListener("click", () => {
    fetch("http://localhost/poow/backend/public/filmes")
      .then((res) => res.json())
      .then((data) => {
        createTable(tableContainer, "Films", data);
      });
  });

  categoriesBtn.addEventListener("click", () => {
    if (currentView === "categories") return;
    fetch("http://localhost/poow/backend/public/generos")
      .then((res) => res.json())
      .then((data) => {
        clearTable();
        createTable(tableContainer, "Generos", data);
        currentView = "categories";
      });
  });
});

function clearTable() {
  document.getElementById("table-container").innerHTML = "";
}

function createTable(prtElm, name, values) {
  prtElm.innerHTML = "";

  const table = document.createElement("table");
  table.className = "table table-dark table-striped";

  const thead = document.createElement("thead");
  const trh = document.createElement("tr");

  const keys = Object.keys(values[0]);
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.innerText = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
    trh.appendChild(th);
  });

  const actionTh = document.createElement("th");
  actionTh.innerText = "Ações";
  trh.appendChild(actionTh);

  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  values.forEach((film) => {
    const tr = document.createElement("tr");

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.innerText = film[key];
      tr.appendChild(td);
    });

    const actionTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-1";
    editBtn.innerText = "Editar";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.innerText = "Excluir";

    deleteBtn.addEventListener("click", () => {
      if (confirm("Tem certeza que deseja excluir este filme?")) {
        fetch(`http://localhost/poow/backend/public/filmes/${film.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            alert(res.message);
            location.reload();
          });
      }
    });

    editBtn.addEventListener("click", () => {
      const modal = new bootstrap.Modal(document.getElementById("editModal"));
      document.getElementById("edit-id").value = film.id;
      document.getElementById("edit-titulo").value = film.titulo;
      document.getElementById("edit-sinopse").value = film.sinopse;
      document.getElementById("edit-trailer_url").value = film.trailer_url;
      document.getElementById("edit-data_lancamento").value =
        film.data_lancamento;
      document.getElementById("edit-duracao").value = film.duracao;
      document.getElementById("edit-genero_id").value = film.genero_id;
      modal.show();
    });

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    tr.appendChild(actionTd);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  prtElm.appendChild(table);
}

function addTopControls(name) {
  const container = document.getElementById("table-container");
  const controlsDiv = document.createElement("div");
  controlsDiv.className =
    "d-flex justify-content-between align-items-center mb-3";

  const title = document.createElement("h4");
  title.textContent = "Filmes";

  const addBtn = document.createElement("button");
  addBtn.className = "btn btn-primary";
  addBtn.setAttribute("data-bs-toggle", "modal");
  addBtn.setAttribute("data-bs-target", "#myModal");
  addBtn.textContent = "Adicionar Filme";

  controlsDiv.appendChild(title);
  controlsDiv.appendChild(addBtn);
  container.prepend(controlsDiv);
}

function addModal(name) {
  if (document.getElementById("myModal")) return;

  const modalHTML = `
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
	`;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function addEditModal() {
  if (document.getElementById("editModal")) return;

  const modalHTML = `
	<div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content bg-dark text-light">
		  <div class="modal-header">
			<h5 class="modal-title">Editar Filme</h5>
			<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
		  </div>
		  <div class="modal-body">
			<form id="editForm" enctype="multipart/form-data">
			  <input type="hidden" id="edit-id" />
			  <div class="mb-2"><label for="edit-titulo" class="form-label">Título</label>
				<input type="text" class="form-control" id="edit-titulo" required></div>
			  <div class="mb-2"><label for="edit-sinopse" class="form-label">Sinopse</label>
				<textarea class="form-control" id="edit-sinopse" required></textarea></div>
			  <div class="mb-2"><label for="edit-trailer_url" class="form-label">Trailer URL</label>
				<input type="text" class="form-control" id="edit-trailer_url"></div>
			  <div class="mb-2"><label for="edit-data_lancamento" class="form-label">Data de Lançamento</label>
				<input type="date" class="form-control" id="edit-data_lancamento"></div>
			  <div class="mb-2"><label for="edit-duracao" class="form-label">Duração (min)</label>
				<input type="number" class="form-control" id="edit-duracao"></div>
			  <div class="mb-2"><label for="edit-genero_id" class="form-label">Gênero ID</label>
				<input type="number" class="form-control" id="edit-genero_id"></div>
			  <div class="mb-2"><label for="edit-capa" class="form-label">Capa (opcional)</label>
				<input type="file" class="form-control" id="edit-capa" accept="image/*"></div>
			  <div class="modal-footer">
				<button type="submit" class="btn btn-primary">Salvar</button>
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
			  </div>
			</form>
		  </div>
		</div>
	  </div>
	</div>
	`;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("edit-id").value;
    const formData = new FormData();
    formData.append("titulo", document.getElementById("edit-titulo").value);
    formData.append("sinopse", document.getElementById("edit-sinopse").value);
    formData.append(
      "trailer_url",
      document.getElementById("edit-trailer_url").value
    );
    formData.append(
      "data_lancamento",
      document.getElementById("edit-data_lancamento").value
    );
    formData.append("duracao", document.getElementById("edit-duracao").value);
    formData.append(
      "genero_id",
      document.getElementById("edit-genero_id").value
    );
    formData.append("_method", "PUT");

    const fileInput = document.getElementById("edit-capa");
    if (fileInput.files.length > 0) {
      formData.append("capa", fileInput.files[0]);
    }

    fetch(`http://localhost/poow/backend/public/filmes/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        bootstrap.Modal.getInstance(
          document.getElementById("editModal")
        ).hide();
        location.reload();
      })
      .catch((err) => {
        console.error("Erro:", err);
        alert("Erro ao atualizar o filme.");
      });
  });
}

function setupAddFilmForm() {
  const form = document.getElementById("filmForm");
  if (!form) return;

  const newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);

  newForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(newForm);

    fetch("http://localhost/poow/backend/public/filmes", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message || "Filme adicionado com sucesso!");
        bootstrap.Modal.getInstance(document.getElementById("myModal")).hide();
        location.reload();
      })
      .catch((err) => {
        console.error("Erro:", err);
        alert("Erro ao adicionar filme.");
      });
  });
}
