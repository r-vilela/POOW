<?php 

namespace src\controllers;

use \core\Controller;
use \src\models\Filme;

class FilmeController extends Controller{
    
    public function index(){
        header('Content-Type: application/json'); 
        $filme = new Filme();

        $filmes = $filme->getFilmes();

        echo json_encode($filmes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function detalhes($id){
        header('Content-Type: application/json'); 
        $filme = new Filme();
        $filme = $filme->getFilme($id);
        
        echo json_encode($filme, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function cadastrar() {
        $titulo = $_POST['titulo'];
        $sinopse = $_POST['sinopse'];
        $duracao = $_POST['duracao'];
        $trailer_url = $_POST['trailer_url'];
        $data_lancamento = $_POST['data_lancamento'];
        $genero_id = $_POST['genero_id'];
    
        // Lida com o upload da imagem
        $nomeArquivo = null;
        if (isset($_FILES['capa']) && $_FILES['capa']['error'] == 0) {
            $extensao = pathinfo($_FILES['capa']['name'], PATHINFO_EXTENSION);
            $nomeArquivo = 'capa_' . uniqid() . '.' . $extensao;
    
            $caminhoUpload = __DIR__ . '/../capas/' . $nomeArquivo;
    
            if (!move_uploaded_file($_FILES['capa']['tmp_name'], $caminhoUpload)) {
                echo json_encode(['success' => false, 'message' => 'Erro ao fazer upload da imagem.']);
                return;
            }
        }
    
        $path = 'capas/'.$nomeArquivo;

        $data_filme = [
            'titulo' => $titulo,
            'sinopse' => $sinopse,
            'capa' => $path,
            'trailer_url' => $trailer_url,
            'data_lancamento' => $data_lancamento,
            'duracao' => $duracao,
            'genero_id' => $genero_id
        ];
    
        $filme = new Filme();
        $filme->salvar($data_filme);
    
        echo json_encode(['success' => true, 'message' => 'Filme cadastrado com sucesso!']);
    }
    
    
    
    public function atualizar($id) {
        // Recebe os dados via POST mesmo para editar (com enctype multipart/form-data)
        $titulo = $_POST['titulo'] ?? null;
        $sinopse = $_POST['sinopse'] ?? null;
        $trailer_url = $_POST['trailer_url'] ?? null;
        $data_lancamento = $_POST['data_lancamento'] ?? null;
        $duracao = $_POST['duracao'] ?? null;
        $genero_id = $_POST['genero_id'] ?? null;
    
        $data_filme = [
            'titulo' => $titulo,
            'sinopse' => $sinopse,
            'trailer_url' => $trailer_url,
            'data_lancamento' => $data_lancamento,
            'duracao' => $duracao,
            'genero_id' => $genero_id
        ];
    
        // Verifica se foi enviada uma nova imagem
        if (isset($_FILES['capa']) && $_FILES['capa']['error'] == 0) {
            $extensao = pathinfo($_FILES['capa']['name'], PATHINFO_EXTENSION);
            $nomeArquivo = 'capa_' . uniqid() . '.' . $extensao;
    
            $caminhoUpload = __DIR__ . '/../capas/' . $nomeArquivo;
    
            if (!move_uploaded_file($_FILES['capa']['tmp_name'], $caminhoUpload)) {
                echo json_encode(['success' => false, 'message' => 'Erro ao fazer upload da imagem.']);
                return;
            }
    
            $data_filme['capa'] = $nomeArquivo;
        }
    
        $filme = new Filme();
        $filme->atualizar($id, $data_filme);
    
        echo json_encode(['success' => true, 'message' => 'Filme atualizado com sucesso!']);
    }

    public function deletar($id){
        
        $filme = new Filme();
        $filme->deletar($id);

        echo json_encode(['success' => true, 'message' => 'Filme deletado com sucesso!']);
    }

    public function buscar(){
        header('Content-Type: application/json'); // Define JSON na resposta
        $query = $_GET['query'] ?? '';
        
        $filme = new Filme();
        $filmes = $filme->buscarFilmes($query);
    
        echo json_encode($filmes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
    

}

?>