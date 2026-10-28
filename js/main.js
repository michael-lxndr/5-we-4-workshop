const themeButtons = document.querySelectorAll('[data-theme]');
const savedTheme = localStorage.getItem('netplus-theme') || 'auto';

function setTheme(theme) {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem('netplus-theme', theme);

	themeButtons.forEach((button) => {
		const isActive = button.dataset.theme === theme;
		button.classList.toggle('is-active', isActive);
		button.setAttribute('aria-pressed', String(isActive));
	});
}

themeButtons.forEach((button) => {
	button.addEventListener('click', () => setTheme(button.dataset.theme));
});

setTheme(savedTheme);
