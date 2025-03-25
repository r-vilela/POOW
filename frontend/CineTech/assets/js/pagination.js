function pagination(elm, otherElm) {
		console.log(!elm.className.includes('ativo'));
		if(!elm.className.includes('ativo')){
				console.log("foi");
		} else {
				elm.classList.remove('ativo')
				elm.classList.add('inativo')
				otherElm.classList.add('ativo')
				otherElm.classList.remove('inaaddtivo')
		}
}
document.addEventListener("DOMContentLoaded", (event) => {

		var filmsElm = document.getElementById("films");
		var categoryElm = document.getElementById("categories");

		categoryElm.addEventListener("click", (event) => {
				pagination(event.target, filmsElm);
		})
		filmsElm.addEventListener("click", (event) => {
				pagination(event.target, categoryElm);
		})
});
