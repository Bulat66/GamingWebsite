let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menuBtn.onclick = () => {
	navbar.classList.toggle('active');
	navbar.classList.toggle('fa-times');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	navbar.classList.remove('fa-times');

	if(window.scrollY > 0){
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
}