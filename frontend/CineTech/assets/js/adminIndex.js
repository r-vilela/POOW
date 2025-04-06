document.addEventListener("DOMContentLoaded", () => {
  carregarFilmes();
});

function carregarFilmes() {
  fetch("http://localhost/poow/backend/public/filmes") // ajuste conforme sua rota
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
            <button class="btn btn-sm btn-outline-warning me-2">Editar</button>
            <button class="btn btn-sm btn-outline-danger">Excluir</button>
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

    try {
      const response = await fetch(
        "http://localhost/poow/backend/public/filmes",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);
      if (result.success) {
        alert(result.message);
        form.reset();
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("modalCadastroFilme")
        );
        modal.hide();
        carregarFilmes();
      } else {
        alert("Erro: " + result.message);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar filme.");
    }
  });
