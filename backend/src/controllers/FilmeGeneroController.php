<?php

namespace src\controllers;

use \core\Controller;
use \src\models\FilmeGenero;

class FilmeGeneroController extends Controller {

    public function associar() {
        $filme_id = $_POST['filme_id'] ?? null;
        $genero_id = $_POST['genero_id'] ?? null;

        if (!$filme_id || !$genero_id) {
            echo json_encode(['error' => 'Filme e Gênero são obrigatórios'], JSON_PRETTY_PRINT);
            return;
        }

        FilmeGenero::associar($filme_id, $genero_id);

    }

    public function desassociar($filme_id, $genero_id) {
        // FilmeGenero::desassociar($filme_id, $genero_id);
        echo "Filme ID: " . $filme_id . "<br>";
        echo "Gênero ID: " . $genero_id . "<br>";
    }

    public function listarGenerosPorFilme($filme_id) {
        $generos = FilmeGenero::listarGenerosPorFilme($filme_id);
        echo json_encode($generos, JSON_PRETTY_PRINT);
    }

    public function listarFilmesPorGenero($genero_id) {
        $filmes = FilmeGenero::listarFilmesPorGenero($genero_id);
        echo json_encode($filmes, JSON_PRETTY_PRINT);
    }

}

?>
