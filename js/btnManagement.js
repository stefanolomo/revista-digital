function btnManagement() {
	let HomeButton = document.getElementById("inicio")
	let host = window.location.host
	let protocol = window.location.protocol
	let pathname = window.location.pathname
	if (pathname !== "/") {
		console.log("test")
		HomeButton.href = `${protocol}//${host}`
	}else{
		console.log("test2")
		HomeButton.href = `#`
	}
	let RedaccionButton = document.getElementById("redaccion")
	if(pathname === "/redaccion/"){
		RedaccionButton.href = `#`
	}else{
		RedaccionButton.href = `${protocol}//${host}/redaccion`
	}
} btnManagement()