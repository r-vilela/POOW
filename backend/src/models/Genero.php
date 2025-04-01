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
}

?>
