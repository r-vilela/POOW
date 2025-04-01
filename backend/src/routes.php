<?php
use core\Router;

$router = new Router();

$router->get('/', 'HomeController@index');
$router->get('/sobre/{nome}', 'HomeController@sobreP');
$router->get('/sobre', 'HomeController@sobre');

<<<<<<< HEAD
$router->get('/filmes', 'FilmeController@index');
$router->post('/filmes', 'FilmeController@cadastrar');
$router->put('/filmes/{id}','FilmeController@atualizar');
$router->delete('/filmes/{id}', 'FilmeController@deletar');
=======
// rotas para livros

$router->get('/livros', 'LivroController@index');
$router->get('/livros/adicionar', 'LivroController@create');
$router->post('/livros/salvar', 'LivroController@store');

//films routes

$router->post('/filmes/salvar', 'FilmeController@store');
>>>>>>> f846ad6afc60cf5d6e338fe7e8c1d6e169abb5bd
