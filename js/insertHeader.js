let content = `
<script src="../js/btnManagement.js" defer></script>
<link rel="stylesheet" href="../css/index.css">
<link rel="shortcut icon" href="../img/logo.png" type="image/x-icon">
<header>
	<h2>Revista <span id="Tittle">Truco</span></h2>
	<div class="buttons">
		<a class="btn" href="default" id="inicio">Inicio</a>
		<button class="btn">Secciones</button>
		<a class="btn" href="../redaccion/" id="redaccion">Redacción</a>
	</div>
</header>
`
let elem = document.createElement("div");
elem.id = 'myID';
elem.innerHTML = content
document.body.insertBefore(elem,document.body.childNodes[0]);