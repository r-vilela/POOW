<?php
use core\Router;

$router = new Router();

$router->get('/', 'HomeController@index');
$router->get('/sobre/{nome}', 'HomeController@sobreP');
$router->get('/sobre', 'HomeController@sobre');

// rotas para livros

$router->get('/livros', 'LivroController@index');
$router->get('/livros/adicionar', 'LivroController@create');
$router->post('/livros/salvar', 'LivroController@store');

//films routes

$router->post('/filmes/salvar', 'FilmeController@store');
