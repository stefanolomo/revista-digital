function btnManagement() {
	let DropdownButtons = document.querySelector(".section")
	let SectionButton = document.getElementById("secciones")
	let dropdown = document.querySelector(".dropdown")
	let HomeButton = document.getElementById("inicio")
	let host = window.location.host
	let protocol = window.location.protocol
	let pathname = window.location.pathname
	document.addEventListener("click", ()=>{
		if (!DropdownButtons.contains(event.target) && !dropdown.contains(event.target) && !SectionButton.contains(event.target)) {
			dropdown.classList.add('hidden');
		}
	})
	SectionButton.addEventListener("click", ()=>{
		dropdown.classList.toggle("hidden")
		dropdown.classList.toggle("fade-in")
	})
	if (pathname !== "/") {
		HomeButton.href = `${protocol}//${host}`
	}else{
		HomeButton.href = `#`
	}
	let RedaccionButton = document.getElementById("redaccion")
	if(pathname === "/redaccion/"){
		RedaccionButton.href = `#`
	}else{
		RedaccionButton.href = `${protocol}//${host}/redaccion`
	}
} btnManagement()