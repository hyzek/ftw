window.sr = ScrollReveal();
sr.reveal('.title', {
    duration: 900,
    delay: 0,
    scale: 0.3
});

var modal = document.getElementById("win");
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("mdl-link");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}