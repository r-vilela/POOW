<?php
use core\Router;

$router = new Router();

$router->get('/', 'HomeController@index');
$router->get('/sobre/{nome}', 'HomeController@sobreP');
$router->get('/sobre', 'HomeController@sobre');

$router->get('/filmes/buscar', 'FilmeController@buscar');

$router->get('/filmes', 'FilmeController@index');
$router->get('/filmes/{id}', 'FilmeController@detalhes');
$router->post('/filmes', 'FilmeController@cadastrar');
// $router->put('/filmes/{id}','FilmeController@atualizar');
$router->post('/filmes/{id}', 'FilmeController@atualizar');
$router->delete('/filmes/{id}', 'FilmeController@deletar');

$router->get('/filmes/genero/{id}', 'GeneroController@buscarGenero');

$router->get('/generos', 'GeneroController@index');
$router->get('/generos/{id}', 'GeneroController@detalhes');
$router->post('/generos', 'GeneroController@cadastrar');
$router->put('/generos/{id}', 'GeneroController@atualizar');
$router->delete('/generos/{id}','GeneroController@deletar');