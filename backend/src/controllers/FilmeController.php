<?php 

namespace src\controllers;

use \core\Controller;
use \src\models\Filme;

class FilmeController extends Controller{
    
    public function index(){
        header('Content-Type: application/json; charset=utf-8');
        $filme = new Filme();

        $filmes = $filme->getFilmes();

        echo json_encode($filmes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function detalhes($id){
        header('Content-Type: application/json'); 
        $filme = new Filme();
        $filme = $filme->getFilme($id);
        
        echo json_encode($filme[0], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function cadastrar() {
        umask(0022);

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
            if (!is_dir(__DIR__ . '/../capas')) {
                mkdir(__DIR__ . '/../capas', 0755, true);
            }
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
        header('Content-Type: application/json; charset=utf-8');
    
        $titulo = $_POST['titulo'] ?? null;
        $sinopse = $_POST['sinopse'] ?? null;
        $trailer_url = $_POST['trailer_url'] ?? null;
        $data_lancamento = $_POST['data_lancamento'] ?? null;
        $duracao = $_POST['duracao'] ?? null;
        $genero_id = $_POST['genero_id'] ?? null;
    
        $filme = new Filme();
        $filmeExistente = $filme->getFilme($id);
        $filmeExistente = $filmeExistente[0] ?? null;
    
        if (!$filmeExistente) {
            echo json_encode(['success' => false, 'message' => 'Filme não encontrado.']);
            return;
        }
    
        $data_filme = [
            'titulo' => $titulo,
            'sinopse' => $sinopse,
            'trailer_url' => $trailer_url,
            'data_lancamento' => $data_lancamento,
            'duracao' => $duracao,
            'genero_id' => $genero_id,
            'capa' => $filmeExistente['capa'] ?? null
        ];
    
        if (isset($_FILES['capa']) && $_FILES['capa']['error'] == 0) {
            $extensao = pathinfo($_FILES['capa']['name'], PATHINFO_EXTENSION);
            $nomeArquivo = 'capa_' . uniqid() . '.' . $extensao;
    
            $caminhoUpload = __DIR__ . '/../capas/' . $nomeArquivo;
            if (!move_uploaded_file($_FILES['capa']['tmp_name'], $caminhoUpload)) {
                echo json_encode(['success' => false, 'message' => 'Erro ao fazer upload da imagem.']);
                return;
            }
    
            // Apaga capa antiga
            if (isset($filmeExistente['capa'])) {
                $caminhoAntigo = __DIR__ . '/../' . $filmeExistente['capa'];
                if (file_exists($caminhoAntigo)) {
                    unlink($caminhoAntigo);
                }
            }
    
            $data_filme['capa'] = 'capas/' . $nomeArquivo;
        }
    
        $filme->atualizar($id, $data_filme);
    
        echo json_encode(['success' => true, 'message' => 'Filme atualizado com sucesso!']);
    }
    
    

    public function deletar($id){
        
        $filme = new Filme();

        $dataFilme = $filme->getFilme($id);

        if($dataFilme && isset($dataFilme['capa'])){
            $path = __DIR__ . '/../' . $dataFilme['capa'];

            if(file_exists($path)){
                unlink($path);
            }
        }

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