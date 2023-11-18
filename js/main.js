let elbutton = document.querySelector(".button");
let elButtonMenu = elbutton.querySelector(".menu");
let elButtonExit = elbutton.querySelector(".exit");
let elNav = document.querySelector(".nav");



elbutton.addEventListener("click", function(evt){
   evt.preventDefault();

   elButtonMenu.classList.toggle("menu__exit");
   elButtonExit.classList.toggle("exit__menu");
   elNav.classList.toggle("nav__block");
})