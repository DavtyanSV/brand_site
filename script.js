const menuActive = document.querySelector('.menu'); 
const burger = document.querySelector('.menu_button'); 

function toggleMenu() {
	menuActive.classList.toggle('hidden'); 
}
burger.addEventListener('click', toggleMenu); 
//menuClose.addEventListener('click', toggleMenu); 