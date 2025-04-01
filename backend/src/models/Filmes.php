<?php
use src/controler;
use /core/Models;

class Filmes extends Models {
		public title;
		public description;
		public genre;
		public cover;
		public trailer;
		public launch;
		public duration;

		public static function getFilmes() {
				return self::select()->get();
		}
		
		public static function salvar(array $data) {
				return self::insert($data)->execute();	
		}
}
