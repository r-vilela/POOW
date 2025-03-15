<?php
namespace src\models;
use \core\Model;

class Livro extends Model {
		public $id;
		public $titulo;
		public $autor;
		public $genero;

		public static function getLivros(){
				return self::select()->get();
		}
		
		public static function getLivro() {
				return self::select()->where('id', $id)->get();
		}

		public static function salvar() {
				return self::insert($data)->execute();
		}

		public static function atualizar($id, array $data) {
				return self::update($data)->where('id', $id)->execute();
		}

		public static function create() {
				return "Hello";
		}

}
