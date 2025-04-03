function addFilmModal(titulo){
    prtElm = document.getElementById('carousel')
    elm = document.createElement('div')

    elm.innerHTML = `
		<div id='filmModal' class='p-auto position-fixed d-flex align-items-center justify-content-center h-100 w-100 text-light' style="top: 0; left: 0; padding: auto" >
		   <div class='bg-dark container' style='margin: 1.75rem; margin-left: auto; margin-right: auto;'>
				<div class='bg-dark' style='max-width: 20rem'>test</div>	
				<div class='d-grid' style='grid-template-columns: 1fr 2fr'>
				<img src="file:///opt/lampp/htdocs/backend/src/${value.capa}" class="d-block w-100 h-100 object-fill-cover">
				TEST CONTENT
				</div>
				<button type='button' onclick='removeFilmModal()' class="btn bg-dark text-light">Fechar</button>
		   </div>
		</div>
    `
    prtElm.appendChild(elm)
}

function removeFilmModal(){
    prtElm = document.getElementById('carousel')

    prtElm.removeChild(prtElm.children[1])

}
