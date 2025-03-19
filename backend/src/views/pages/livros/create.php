
<?php $render('header'); ?>
<div class='container'>
    <h1>Novo Livro</h1>
    <form method="post" action="salvar">
        <div class="mb-3">
            <label for="titulo" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="titulo" name="titulo">
        </div>
        <div class="mb-3">
            <label for="autor" class="form-label">Autor</label>
            <input type="text" class="form-control" id="autor" name="autor">
        </div>
        <div class="mb-3">
            <label for="genero" class="form-label">Genero</label>
            <input type="text" class="form-control" id="genero" name="genero">
        </div>
        <button type="submit" class="btn btn-primary">Salvar Livro</button>
    </form>
</div>
<?php $render('footer'); ?>
