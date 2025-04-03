<?php

namespace src\models;
use \core\Model;

class Genero extends Model{
    
    public $id;
    public $nome;
    public $descricao;

    public static function getGeneros(){
        return self::select()->get();
    }

    public static function getGenero($id){
        return self::select()->where('id', $id)->get();
    }

    public function salvar(array $data) {
        return self::insert($data)->execute();
    }

    public static function atualizar($id, array $data) {
        return self::update($data)->where('id', $id)->execute();
    }

    public static function deletar($id) {
        return self::delete()->where('id', $id)->execute();
    }

    public static function buscarFilmesPorGenero($genero_id) {
        return self::select('filmes.id, filmes.titulo, filmes.sinopse, filmes.capa, filmes.trailer_url, filmes.data_lancamento, filmes.duracao')
            ->join('filmes', 'filmes.genero_id', '=', 'generos.id')
            ->where('generos.id', $genero_id)
            ->whereNotNull('filmes.id')
            ->get();
    }
    
}

?>
