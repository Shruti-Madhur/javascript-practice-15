const sidebar = document.querySelector(".main-sidebar");
const cross = document.querySelector(".cross");
const bars = document.querySelector(".side-menubar");

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar")
});

cross.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
});