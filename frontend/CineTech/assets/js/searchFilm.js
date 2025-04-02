srcForm = document.getElementById('searchForm')
srcButton = document.getElementById('searchButton')

srcForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(searchButton, searchForm)
})
