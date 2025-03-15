<?php
namespace src\controllers;

use \core\Controller;
use src\models\Livro;

class LivroController extends Controller{

	public function index() {
		$livro = new Livro();
		$livros = $livro->getLivros();

		return $this->render('livros/index', ['livros' => $livros]);
	}

	public function create() {

		return $this->render('livros/create', ['livros' => $livros]);
		
	}

	public function store() {

		$titulo = $_POST['titulo'];
		$autor = $_POST['autor'];
		$genero = $_POST['genero'];

		$livroData = [
			'titulo' => $titulo,
			'autor' => $autor,
			'genero' => $genero
		];
		$livro = new Livro();

		$livro->salvar($livroData);
	}
	
}
?>
