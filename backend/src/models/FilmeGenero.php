<?php

namespace src\models;
use \core\Model;
use \core\Database;
use \ClanCats\Hydrahon\Builder;

class FilmeGenero extends Model {
    
    public $filme_id;
    public $genero_id;
    
    private static function getBuilder() {
        $connection = Database::getInstance();
        $builder = new Builder('mysql', function($query, $queryString, $queryParameters) use($connection) {
            $statement = $connection->prepare($queryString);
            $statement->execute($queryParameters);

            if ($query instanceof \ClanCats\Hydrahon\Query\Sql\FetchableInterface) {
                return $statement->fetchAll(\PDO::FETCH_ASSOC);
            }
        });
        
        return $builder->table('filme_genero');
    }

    public static function associar($filme_id, $genero_id) {
        $builder = self::getBuilder();
        return $builder->insert(['filme_id' => $filme_id, 'genero_id' => $genero_id])->execute();
    }

    public static function desassociar($filme_id, $genero_id) {
        $builder = self::getBuilder();
        return $builder->delete()->where('filme_id', $filme_id)->where('genero_id', $genero_id)->execute();
    }

    public static function listarGenerosPorFilme($filme_id) {
        $builder = self::getBuilder();
        return $builder->select('genero_id')->where('filme_id', $filme_id)->get();
    }

    public static function listarFilmesPorGenero($genero_id) {
        $builder = self::getBuilder();
        return $builder->select('filme_id')->where('genero_id', $genero_id)->get();
    }
}
?>