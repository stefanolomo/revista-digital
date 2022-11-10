let headerHTML = "<header><section class=menu><div class=revista><h3 class=titulo-revista>Revista Truco</h3></div><div class=buttons><a href=# class=btn>Inicio</a><div class=dropdown><button class=dropbtn onclick=myFunction()>Secciones</button><div class=dropdown-content id=myDropdown><a href=./noticias/ >Noticias</a> <a href=./actualidad/ >Actualidad</a> <a href=./deportes>Deportes</a> <a href=./moda>Moda</a> <a href=./cocina>Cocina</a> <a href=./entretenimiento>Entretenimiento</a></div></div><a href=./redaccion class=btn>Redacción</a></div></section></header>"

elem = document.createElement("div");
elem.id = 'myID';
elem.innerHTML = headerHTML
document.body.insertBefore(elem,document.body.childNodes[0]);