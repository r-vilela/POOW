function addModal(name){
		elm = document.getElementById("table-container");


		div = document.createElement("div");
		div.classList.add('d-flex')
		div.classList.add('align-items-center')
		div.classList.add('justify-content-between')

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

						<label for="filmTitle">Title</label>
						<input type="text" class="form-control" id="filmTitle" placeholder="Enter the film title">

						<label for="filmDescription">Description</label>
						<input type="text" class="form-control" id="filmDescription" placeholder="Enter the film description">
						
						<label for="filmGenre">Genre</label>
						<input type="text" class="form-control" id="filmGenre" placeholder="Enter the film genre">

						<label for="filmCover">Cover</label>
						<input type="file" class="form-control" id="filmCover" placeholder="Enter the film cover">

						<label for="filmTrailer">Link for Trailer</label>
						<input type="text" class="form-control" id="filmTrailer" placeholder="Enter the film link trailer">

						<label for="filmLaunch">Launch Date</label>
						<input type="text" class="form-control" id="filmLaunch" placeholder="Enter the film launch date">

						<label for="filmDuration">Duration</label>
						<input type="text" class="form-control" id="filmDuration" placeholder="Enter the film duration">

						<button type="submit" class="btn btn-primary mt-2">Add Category</button>

						</form>
						</div>


						</div>
						</div>
						</div>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
						Adicionar Filme
						</button>`

						elm.appendChild(div)
		}else if (name === 'Categories') {
				div.innerHTML = `
						<h4>${name}</h4>
						<div class="modal" id="myModal">
						<div class="modal-dialog">
						<div class="modal-content">

						<div class="modal-header bg-dark">
						<h4 class="modal-title">Adicionando Categoria</h4>
						<button type="button" class="btn-close text-light" data-bs-dismiss="modal"></button>
						</div>

						<div class="modal-body bg-dark">
						<form id="catForm" >

						<label for="nome">Nome</label>
						<input type="text" class="form-control" name="nome" id="nome" placeholder="Insira o nome da categoria..." required>

						<label for="descricao">Descricao</label>
						<input type="text" class="form-control" id="descricao" name="descricao" placeholder="Insira a descricao da categoria...">

						<button type="submit" class="btn btn-primary mt-2">Adicionar</button>

						</form>
						</div>


						</div>
						</div>
						</div>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
						Adicionar Categoria
						</button>`

						elm.appendChild(div)
						addCat();
		}

}

async function addInfoModal(id,nm){
		prtElm = document.getElementById("table-container");
		elm = document.createElement('div')

		value = await getCatId(id)
		console.log(value[0]['descricao'])

		if(!nm) {
		elm.innerHTML = `
				<div id='filmModal' class='p-auto position-fixed d-flex align-items-center justify-content-center h-100 w-100 text-light ' style="background-color: rgba(33,37,41,0.8); z-index: 4; top: 0; left: 0" >
				<div class='bg-dark card text-light rounded p-4' style='margin: 1.75rem; margin-left: auto; margin-right: auto;'>
				<div class='pb-4 d-flex justify-content-between align-items-center w-100'>
				<span class="h4">Categoria </span>
				<button type='button' onclick='removeFilmModal()' class="btn bg-danger text-light">Fechar</button>
				</div>	
				<div class="p-2 h6 d-flex">
				<form id="updCatForm" >

				<label for="nome">Nome</label>
				<input type="text" class="form-control bg-dark text-light" name="nome" id="nome" value=${value[0]['nome']} required>

				<label for="descricao">Descricao</label>
				<input type="text" class="form-control bg-dark text-light" id="descricao" name="descricao" value=${value[0]['descricao']}>

				<div class="d-flex justify-content-between align-items-center" >
				<button type="submit" onclick="updCat(${value[0]['id']})" class="btn btn-success btn-sm mt-2">Atualizar</button>
				<button type="button" onclick="delCat(${value[0]['id']})" class="btn btn-danger btn-sm mt-2">Apagar</button>
				</div>

				</form>
				</div>
				</div>
				</div>
				`
		}

		prtElm.appendChild(elm)
		updCat(id)
}
