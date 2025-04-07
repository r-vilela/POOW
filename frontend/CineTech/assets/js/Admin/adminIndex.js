document.addEventListener("DOMContentLoaded", () => {
  carregarFilmes();
});

function carregarFilmes() {
  fetch("http://localhost/poow/backend/public/filmes")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementById("tabela-filmes");
      tbody.innerHTML = "";

      if (data.length === 0) {
        tbody.innerHTML =
          '<tr><td colspan="5" class="text-center">Nenhum filme cadastrado.</td></tr>';
        return;
      }

      data.forEach((filme) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${filme.titulo}</td>
          <td>${filme.sinopse}</td>
          <td>${filme.genero_id ?? "---"}</td>
          <td>${filme.duracao} min</td>
          <td>
            <button class="btn btn-sm btn-outline-warning me-2" onclick="editarFilme(${
              filme.id
            })">Editar</button>
            <button class="btn btn-sm btn-outline-danger" onclick="excluirFilme(${
              filme.id
            })">Excluir</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar filmes:", error);
      alert("Erro ao carregar filmes.");
    });
}

document
  .getElementById("formCadastro")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Verifica se é edição ou cadastro
    const editandoId = form.dataset.editandoId;
    const url = editandoId
      ? `http://localhost/poow/backend/public/filmes/${editandoId}`
      : "http://localhost/poow/backend/public/filmes";

    const method = editandoId ? "POST" : "POST"; // Se for PUT, altere no backend
    try {
      const response = await fetch(url, {
        method,
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        alert(result.message);
        form.reset();
        delete form.dataset.editandoId;

        const modal = bootstrap.Modal.getInstance(
          document.getElementById("modalCadastroFilme")
        );
        modal.hide();
        carregarFilmes();
      } else {
        alert("Erro: " + result.message);
      }
    } catch (error) {
      console.error("Erro ao cadastrar/editar:", error);
      alert("Erro ao salvar filme.");
    }
  });

function editarFilme(id) {
  fetch(`http://localhost/poow/backend/public/filmes/${id}`)
    .then((res) => res.json())
    .then((filme) => {
      console.log("Resposta da API:", filme);

      const form = document.getElementById("formCadastro");

      const dados = filme;
      form.titulo.value = dados.titulo || "";
      form.sinopse.value = dados.sinopse || "";
      form.duracao.value = dados.duracao || "";
      form.trailer_url.value = dados.trailer_url || "";
      form.data_lancamento.value = dados.data_lancamento || "";
      form.genero_id.value = dados.genero_id || "";

      // <- CORREÇÃO AQUI:
      form.dataset.editandoId = dados.id;

      const imgPreview = document.getElementById("capa-atual");

      if (dados.capa) {
        imgPreview.src = `http://localhost/poow/backend/src/${dados.capa}`;
        imgPreview.style.display = "block";
      } else {
        imgPreview.src = "";
        imgPreview.style.display = "none";
      }

      const modal = new bootstrap.Modal(
        document.getElementById("modalCadastroFilme")
      );
      modal.show();
    })
    .catch((err) => {
      console.error("Erro ao carregar filme para edição:", err);
      alert("Erro ao carregar dados do filme.");
    });
}

function excluirFilme(id) {
  if (!confirm("Tem certeza que deseja excluir este filme?")) return;

  fetch(`http://localhost/poow/backend/public/filmes/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        carregarFilmes();
      } else {
        alert("Erro: " + data.message);
      }
    })
    .catch((err) => {
      console.error("Erro ao excluir:", err);
      alert("Erro ao excluir filme.");
    });
}
document
  .querySelector('[data-bs-target="#modalCadastroFilme"]')
  .addEventListener("click", () => {
    const form = document.getElementById("formCadastro");
    form.reset();
    delete form.dataset.editandoId;

    const imgPreview = document.getElementById("capa-atual");
    imgPreview.src = "";
    imgPreview.style.display = "none";
  });
document.getElementById("capa").addEventListener("change", function () {
  const file = this.files[0];
  const imgPreview = document.getElementById("capa-atual");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgPreview.src = e.target.result;
      imgPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    imgPreview.src = "";
    imgPreview.style.display = "none";
  }
});
