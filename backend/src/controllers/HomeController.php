<?php
namespace src\controllers;

use \core\Controller;

use \src\models\Livro;

class HomeController extends Controller {

    public function index() {
        #$this->render('home', ['nome' => 'Bonieky']);
		$livro = new Livro();

		$livros = $livro->getLivros();

		return json_encode($livros, JSON_PRETTY_PRINT);		
    }

    public function sobre() {
        $this->render('sobre');
    }

    public function sobreP($args) {
        print_r($args);
    }

}
