<?php
use core\Router;

$router = new Router();

$router->get('/', 'HomeController@index');
$router->get('/sobre/{nome}', 'HomeController@sobreP');
$router->get('/sobre', 'HomeController@sobre');

$router->get('/filmes', 'FilmeController@index');
$router->post('/filmes', 'FilmeController@cadastrar');
$router->put('/filmes/{id}','FilmeController@atualizar');
$router->delete('/filmes/{id}', 'FilmeController@deletar');