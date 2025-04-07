async function addFilmModal(id){
    prtElm = document.getElementById('carousel')
    elm = document.createElement('div')

    value = await getFilmeId(id)
    console.log(value[0])

    elm.innerHTML = `
		<div id='filmModal' class='p-auto position-fixed d-flex align-items-center justify-content-center h-100 w-100 text-light ' style="background-color: rgba(33,37,41,0.8); z-index: 4; top: 0; left: 0" >
		   <div class='bg-dark card text-light rounded p-4' style='margin: 1.75rem; margin-left: auto; margin-right: auto;'>
				<div class='pb-4 d-flex justify-content-between align-items-center w-100'>
				<span class="h4">Detalhes do Filme </span>
				<button type='button' onclick='removeFilmModal()' class="btn bg-danger text-light">Fechar</button>
				</div>	
				<div class='d-grid' style='grid-template-columns: 1fr 2fr'>
				<img src="file:///opt/lampp/htdocs/poow/backend/src/${value[0].capa}" class="d-block w-100 h-100 object-fill-cover">
				<div class="p-2 h6 d-flex" style="flex-direction: column;row-gap: 1rem">
				<span><strong>Titulo: </strong>${value[0].titulo}</br></span>
				<span><strong>Sinopse: </strong>${value[0].sinopse}</br></span>
				<span><strong>Duracao do Filme: </strong>${value[0].duracao} minutos</br></span>
				<span><strong>Data de Lacamento: </strong>${value[0].data_lancamento}</br></span>
				<span><strong>Trailer do Filme: </strong><a target="blank" href="${value[0].trailer_url}">${value[0].trailer_url}</a></br></span>
				</div>
				</div>
		   </div>
		</div>
    `
    prtElm.appendChild(elm)
}

function removeFilmModal(){
    prtElm = document.getElementById('carousel')

    prtElm.removeChild(prtElm.children[1])

}
