const toggleBar = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBar.addEventListener("click", function(){
    links.classList.toggle("show-links");
});