srcForm = document.getElementById('searchForm')


srcForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    let param = document.getElementById('searchParam')
    let option = document.getElementById('searchOption')

    if (param.value != ''){
		if ( option.value === 'titulo'){
		    await listFilms(param.value)
		} else if ( option.value === 'genero'){
		    console.log('quer genero')
		}
	} else {

    await listFilms()

	}
    carousel()


})
