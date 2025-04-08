function carousel(){
  let items = document.querySelectorAll('.carousel .carousel-item')
  items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i<minPerSlide;i++) {
      if(!next) {
        next = items[0]
      }
      let clone = next.cloneNode(true)
      el.appendChild(clone.children[0])
      next = next.nextElementSibling
    }
  })
  
}

function carregarCategorias() {
  fetch("http://localhost/poow/backend/public/generos")
    .then((response) => response.json())
    .then((data) => {
      const selection = document.getElementById("searchOption");
      selection.innerHTML = "";

      if (data.length === 0) {
        selection.innerHTML =
          '<tr><td colspan="5" class="text-center">Nenhuma categoria cadastrado.</td></tr>';
        return;
      }

      const divPad = document.createElement("div");
      divPad.innerHTML = `
        <option class="ml-10" value="0" selected>Generos</option>
      `;
      selection.appendChild(divPad.children[0]);

      data.forEach((genero) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <option class="ml-10" value="${genero.id}">${genero.nome}</option>
        `;
        selection.appendChild(div.children[0]);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar filmes:", error);
      alert("Erro ao carregar filmes.");
    });
}

function carregarFilmes(search = null, genero = null) {
  fetch(genero || search ? (genero ? ("http://localhost/backend/public/filmes/genero/" + genero) : ("http://localhost/backend/public/filmes/buscar?query=" + search)) : "http://localhost/poow/backend/public/filmes")
    .then((response) => response.json())
    .then((data) => {
      listFilms(data[0] ? data : [])
    })
    .then(() => {
      carousel()
    })
    .catch((error) => {
      console.error("Erro ao carregar filmes:", error);
      alert("Erro ao carregar filmes.");
    })
}

document
  .getElementById('searchOption')
  .addEventListener('change', (e) => {
    e.preventDefault()

    const option = e.target.options[e.target.selectedIndex].value

    if(option == 0 ) {
      carregarFilmes()
    } else {
      carregarFilmes(search = null, genero=option)
    } 
  })

document
	.getElementById('searchForm')
	.addEventListener('submit', async (event) => {
	event.preventDefault()

	const form = event.target

	let param = form.pesquisa.value
	let option = form.genero.value

	if (param){
		carregarFilmes(search=param)
	} else {

		carregarFilmes()

	}})


document.addEventListener("DOMContentLoaded", (event) => {
  carregarCategorias()

  carregarFilmes()

  
})
