const innerPart = document.querySelector(".inner_part");
const outerPart = document.querySelector(".outer_part");
const modalOpen = document.querySelector(".modal_open");
const modalClose = document.querySelector(".close_btn");

modalOpen.addEventListener("click", ()=>{
    innerPart.classList.add("invisible");
    outerPart.classList.add("open_modal");
});

modalClose.addEventListener("click", ()=>{
    outerPart.classList.remove("open_modal");
    innerPart.classList.remove("invisible");
});