<!DOCTYPE html>
<html>
<head>
	<title>Snake</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<script type="text/javascript" src="js/juego.js"></script>
</head>
<body onkeydown="control(event);"> <!-- onkeydown="whichButton(event)" onload="main()"-->
	<div class="contenedor">
		<div class="izquierda">
			<h3>INSTRUCCIONES:</h3>
			<ul class="ins">
				<li class="f">Usa las flechas para moverte </li>
				<li>Mueve al craneo de sombra para comer los bastion</li>
				<br>
				<li>Si chocas con una pared o contigo mismo perderás</li>
				<br>
				<li>Come todos los bastion que puedas en menos de 1:30</li>
				<br>
				<li>Presiona una flecha para iniciar, excepto arriba o izaquierda</li>
			</ul>
		</div>
		<div class="derecha">
			<h3>Tu puntuacion es de:</h3>
			<ul id="puntuaciones"></ul>
		</div>
		<div class="juego">
			<canvas id="canvas" width="700" height="600">
				NO SOPORTAS HTML5
			</canvas>
		</div>
	</div>
</body>
</html>