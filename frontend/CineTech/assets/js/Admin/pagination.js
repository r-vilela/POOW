function createTable(prtElm, name, values) {
  prtElm.innerHTML = "";
  title = document.createElement("div");
  addModal(name);
  title.innerHTML = ``;

  div = document.createElement("div");
  table = document.createElement("table");

  table.classList.add("table");
  table.classList.add("table-dark");
  table.classList.add("table-striped");

  thead = document.createElement("thead");
  trh = document.createElement("tr");

  th = document.createElement("th");

  th.innerHTML = " ";
  trh.appendChild(th);

  keys = Object.keys(values[0]);

  keys.forEach((key) => {
    th = document.createElement("th");

    th.innerHTML = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
    trh.appendChild(th);
  });

  tbody = document.createElement("tbody");

  values.forEach((value) => {
    tr = document.createElement("tr");

    th = document.createElement("td");
    id = value["id"];
    th.innerHTML = `
						<div onclick="addInfoModal(${id})" class="btn btn-info btn-sm rounded-circle"><i class="bi bi-info text-light "></i></div>
				`;
    tr.appendChild(th);

    keys.forEach((key) => {
      th = document.createElement("td");
      th.innerHTML = value[key];

      tr.appendChild(th);
    });

    tbody.appendChild(tr);
  });
  thead.appendChild(trh);
  table.appendChild(thead);
  table.appendChild(tbody);
  div.appendChild(table);

  prtElm.appendChild(title);
  prtElm.appendChild(div);
}

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
