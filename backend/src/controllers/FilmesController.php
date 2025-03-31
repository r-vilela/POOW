<?php
namespace src/controllers;

use /core/Controller;
use core/Request;
use src/models/Filmes;

class FilmesController extends Controller {
		
		public function store() {
				var_dump($_POST, $_FILE);

				die();
		}
}
