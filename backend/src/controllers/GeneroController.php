<?php 

namespace src\controllers;

use \core\Controller;
use \src\models\Genero;

class GeneroController extends Controller{
    
    public function index(){
        $genero = new Genero();

        $generos = $genero->getGeneros();

        echo json_encode($generos, JSON_PRETTY_PRINT);
    }

    public function cadastrar(){
        $nome = $_POST['nome'];
        $descricao = $_POST['descricao'] ?? null;

        $data_genero = [
            'nome' => $nome,
            'descricao' => $descricao
        ];

        $genero = new Genero();
        $genero->salvar($data_genero);

        echo json_encode(['success' => true, 'message' => 'Genero cadastrado com sucesso!']);

    }
    
    public function atualizar($id){
        parse_str(file_get_contents("php://input"), $_PUT);

        $data_genero = [
            'nome' => $_PUT['nome'] ?? null,
            'descricao' => $_PUT['descricao'] ?? null,
        ];

        $filme = new Genero();
        $filme->atualizar($id, $data_genero);

        echo json_encode(['success' => true, 'message' => 'Genero atualizado com sucesso!']);
    }

    public function deletar($id){
        $genero = new Genero();
        $genero->deletar($id);
        echo json_encode(['success' => true, 'message' => 'Genero deletado com sucesso!']);
    }

}

?>