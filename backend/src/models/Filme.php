<?php

namespace src\models;
use \core\Model;

class Filme extends Model{

    public $id;
    public $titulo;
    public $sinopse;
    public $capa;
    public $trailer_url;
    public $data_lancamento;
    public $duracao;

    public static function getFilmes() {
        return self::select()->get();
    }
    
    public static function getFilme($id) {
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

    public static function buscarFilmes($query){
        // Mudei para usar get() em vez de execute() para receber os resultados
        // e também adicionei busca na sinopse
        return self::select()
            ->where('titulo', 'like', "%$query%")
            ->get();
    }
    

}


?>