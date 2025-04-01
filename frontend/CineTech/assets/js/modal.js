function addModal(){
		elm = document.getElementById("table-container");

		div = document.createElement("div");
		div.innerHTML = `
		<div class="modal fade" id="films" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
						<div class="modal-content">
								<div class="modal-header">
										<h5 class="modal-title" id="filmeLabel">Add Films</h5>
										<button type="button" class="close" data-dismiss="modal">
												<span>&times;</span>
										</button>
								</div>
								<div class="modal-body">
										<h1>TEST</h1>
								</div>
								<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary">Send data</button>
								</div>
						</div>
				</div>
		</div>
		`
		console.log(div);
		elm.appendChild(div)
}
