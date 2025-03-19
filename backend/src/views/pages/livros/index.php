<html lang="pt-br">
<?php $render('header') ?>
<body>
    <div class='container'>
        <div class='d-flex justify-content-between aling-items-center py-4'>
            <div>
                <h1> Livros </h1>
            </div>

            <div>
                <a href='/mvc/public/livros/adicionar' class='btn btn-primary'> Novo Livro </a>
            </div>
        </div>   
        <table class='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Genero</th>
                <th>
            </thead>
            <tbody>
                <?php foreach ($livros as $livro) {
                ?>
	            <tr>
       		        <td><?= $livro['id'] ?></td>
		        <td><?= $livro['titulo'] ?></td>
		        <td><?= $livro['autor'] ?></td>
		        <td><?= $livro['genero'] ?></td>
		    </tr>
                <?php } ?>
	    </tbody>
        </table>
                    
    </div>
<?php $render('footer') ?>

</body>
</html>
