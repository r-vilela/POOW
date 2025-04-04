CREATE DATABASE filmes_db;
USE filmes_db;

CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT NULL
);

CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    capa VARCHAR(255) NOT NULL, -- URL da imagem
    trailer_url VARCHAR(255) NOT NULL,
    data_lancamento DATE NOT NULL,
    duracao INT NOT NULL CHECK (duracao > 0),
    genero_id INT NOT NULL,
    FOREIGN KEY (genero_id) REFERENCES generos(id) ON DELETE CASCADE
);

USE filmes_db;

INSERT INTO generos (nome, descricao) VALUES
('Ação', 'Filmes com muita adrenalina e cenas de combate.'),
('Comédia', 'Filmes que visam entreter com humor.'),
('Drama', 'Filmes que exploram emoções profundas.'),
('Ficção Científica', 'Filmes sobre tecnologia e futuro.'),
('Terror', 'Filmes para assustar e criar tensão.');

INSERT INTO filmes (titulo, sinopse, capa, trailer_url, data_lancamento, duracao, genero_id) VALUES
('Matrix', 'Um hacker descobre a verdade sobre sua realidade.', 'capas/matrix.jpg', 'https://www.youtube.com/watch?v=vKQi3bBA1y8', '1999-03-31', 136, 4), -- Ficção Científica
('O Máskara', 'Um homem encontra uma máscara mágica que muda sua vida.', 'capas/mascara.jpg', 'https://www.youtube.com/watch?v=hOqVRwGVUkA', '1994-07-29', 101, 2), -- Comédia
('Interestelar', 'Exploradores viajam através de um buraco de minhoca.', 'capas/interestelar.jpg', 'https://www.youtube.com/watch?v=zSWdZVtXT7E', '2014-11-07', 169, 4); -- Ficção Científica