const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
console.log();

toggleBtn.addEventListener('click', () => {
	document.body.classList.toggle('show-nav');
});

navLinks.forEach((item) => {
	item.addEventListener('click', () => {
		document.body.classList.remove('show-nav');
	});
});
