<?php 

namespace src\controllers;

use \core\Controller;
use \src\models\Filme;

class FilmeController extends Controller{
    
    public function index(){
        $filme = new Filme();

        $filmes = $filme->getFilmes();

        echo json_encode($filmes, JSON_PRETTY_PRINT);
    }

    public function cadastrar(){
        $titulo = $_POST['titulo'];
        $sinopse = $_POST['sinopse'];
        $capa = $_POST['capa'];
        $duracao = $_POST['duracao'];
        $trailer_url = $_POST['trailer_url'];
        $data_lancamento = $_POST['data_lancamento'];

        $data_filme = [
            'titulo' => $titulo,
            'sinopse' => $sinopse,
            'capa' => $capa,
            'trailer_url' => $trailer_url,
            'data_lancamento' => $data_lancamento,
            'duracao' => $duracao
        ];

        $filme = new Filme();
        $filme->salvar($data_filme);

        echo json_encode(['success' => true, 'message' => 'Filme cadastrado com sucesso!']);

    }
    
    public function atualizar($id){
        parse_str(file_get_contents("php://input"), $_PUT);

        $data_filme = [
            'titulo' => $_PUT['titulo'] ?? null,
            'sinopse' => $_PUT['sinopse'] ?? null,
            'capa' => $_PUT['capa'] ?? null,
            'trailer_url' => $_PUT['trailer_url'] ?? null,
            'data_lancamento' => $_PUT['data_lancamento'] ?? null,
            'duracao' => $_PUT['duracao'] ?? null
        ];

        $filme = new Filme();
        $filme->atualizar($id, $data_filme);

        echo json_encode(['success' => true, 'message' => 'Filme atualizado com sucesso!']);

    }

    public function deletar($id){
        $filme = new Filme();
        $filme->deletar($id);

        echo json_encode(['success' => true, 'message' => 'Filme deletado com sucesso!']);
    }

}

?>
