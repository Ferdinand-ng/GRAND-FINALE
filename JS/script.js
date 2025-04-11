const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const soc = document.getElementById("soc-main")
const socs = document.getElementById("soc-drop")
const phasex = document.getElementById("phase-one")
const pop = document.querySelector("#popup")
const per = document.querySelector("#per")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})); 

soc.addEventListener("click", () => {
    socs.classList.toggle("actiive");
});
document.getElementById("per").onmouseenter= function(){
    document.getElementById("popup").style = "opacity: 1; transition: 400ms"
}
document.getElementById("per").onmouseleave= function(){
    document.getElementById("popup").style = "opacity: 0; transition: 400ms"
}
// soc.onclick = function(){
//     socs.classList.toggle("active")
// }