<?php
namespace src;

class Config {
    const BASE_DIR = '/backend/public';

    const DB_DRIVER = 'mysql';
    const DB_HOST = 'localhost';
    const DB_DATABASE = 'filmes_db';
    CONST DB_USER = 'root';
    const DB_PASS = '123'; //coloque a senha do seu banco de dados

    const ERROR_CONTROLLER = 'ErrorController';
    const DEFAULT_ACTION = 'index';
}