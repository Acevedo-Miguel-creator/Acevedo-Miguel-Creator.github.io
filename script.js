const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
	body.classList.add(bodyClass)
	btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

	addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

// Typewriter Effect
const typeWriter = (text, elementId, speed = 50, callback) => {
	const element = document.getElementById(elementId);
	let i = 0;
	element.innerHTML = ""; // Clear existing text
	element.classList.add('cursor'); // Add cursor

	function type() {
		if (i < text.length) {
			element.innerHTML += text.charAt(i);
			i++;
			setTimeout(type, speed);
		} else {
			// element.classList.remove('cursor'); // Keep cursor blinking at the end
			if (callback) callback();
		}
	}
	type();
};

// Init Typewriter on Load
window.onload = () => {
	// Full bio text
	const bioText = "Computer Science student at Montclair State University with experience in software development, AI research, and data-focused projects. Currently a research assistant in an affective computing lab, working on game-based experiments, biodata collection, and emotion recognition.";

	// Speed adjusted for faster typing (20ms)
	typeWriter(bioText, "typewriter-bio", 20);

	// Side Quest Toggle
	const questBtn = document.getElementById('quest-trigger');
	const questContainer = document.getElementById('quest-container');

	if (questBtn && questContainer) {
		questBtn.addEventListener('click', () => {
			questContainer.classList.toggle('hidden');
			if (!questContainer.classList.contains('hidden')) {
				questBtn.textContent = "Close Side Quests";
			} else {
				questBtn.textContent = "Want to learn more about me?";
			}
		});
	}
};
