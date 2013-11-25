<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Pesquisa Avançada</title>
	<script type="text/javascript" src="{$BASE_URL}js/main.js"></script>
  {include file="../common/css.tpl"}

</head>

<body class="_search">
  <div class="row row-offcanvas row-offcanvas-left">

    {include file="sidebar.tpl"}

    <div class="col-xs-12 col-sm-9">

      <nav class="navbar navbar-default" role="navigation">
      </nav>

      <p class="pull-left visible-xs">
        <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
      </p>

      <div class="jumbotron">
        <h2>Pesquisa Avançada</h2>
      </div>
    </div>
	
	<div id="div_formSearch">
		<form id="formSearch" method="post">
			Codigo da encomenda: <input type="text" name="codEncomenda" pattern="\w*" />
			<br>
			Data do inicio: <input type="text" name="dateInit" placeholder="DD-MM-AAAA" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"/>
			Data de fim: <input type="text" name="dateEnd" placeholder="DD-MM-AAAA" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"/>
			<br>
			Preco: <input type="text" name="price" pattern="^(?=.*\d)\d*(?:\.\d\d)?$"/>
			<br>
			Artigos:
			<br>
			<table>
				<tr>
					<td>
						<input type="checkbox" id="rosas" value="Rosas"> Rosas
					</td>
					<td>
						<input type="checkbox" id="tulipas" value="Tulipas"> Tulipas
					</td>
				</tr>
				<tr>
					<td>
						<input type="checkbox" id="alecrim" value="Alecrim"> Alecrim
					</td>
					<td>
						<input type="checkbox" id="tesoura" value="Tesoura de Podar"> Tesoura de Podar
					</td>
				</tr>
				<tr>
					<td>
						<input type="checkbox" id="adubo" value="Adubo Floral"> Adubo Floral
					</td>
					<td>
						<input type="checkbox" id="criacao" value="Criacao de Arranjos Florais"> Criacao de Arranjos Florais
					</td>
				</tr>
			</table>
			<br>
			Morada: <input type="text" name="address" />
			<br>
			Quantidade: <input type="number" name="quantidade" min="1" max="20"/>
			<br>
			<br>
			<input type="submit" value="Procurar" />
		</form>
	</div>

  </div><!--/row-->

  {include file="../common/js.tpl"}
</body>
</html>
