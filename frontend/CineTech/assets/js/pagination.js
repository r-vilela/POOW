function pagination(elm, otherElm, values) {
  if (elm.className.includes("inativo")) {
    otherElm.classList.remove("ativo");
    otherElm.classList.add("inativo");
    elm.classList.add("ativo");
    elm.classList.remove("inativo");

    tableElm = document.getElementById("table-container");
    createTable(tableElm, elm.innerText, values);
  }
}
