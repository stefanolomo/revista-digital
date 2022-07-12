function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}
window.onclick = function(d) {
    console.log(!d);
    console.log(!d.target);
    if (!d.target.matches(".dropbtn")) {
        var a, b = document.getElementsByClassName("dropdown-content");
        for (a = 0; a < b.length; a++) {
            var c = b[a];
            c.classList.contains("show") && c.classList.remove("show")
        }
    }
}