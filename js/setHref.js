function setHref() {
	let button = document.getElementById("inicio")
	let host = window.location.host
	let protocol = window.location.protocol
	let pathname = window.location.pathname
	if (pathname !== "/") {
		console.log("test")
		button.href = `${protocol}//${host}`
	}else{
		console.log("test2")
		button.href = `#`
	}
} setHref()