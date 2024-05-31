document.addEventListener("DOMContentLoaded", function () {
	const burgerToogleButton = document.getElementById("burgerToggle");
	const burgerNav = document.getElementById("burgerNav");

	const burgerCloseIcon = document.getElementById("burgerCloseIcon");
	const burgerLines = document.getElementsByClassName("header__burger-line");
	console.log(burgerLines);
	let burgerOpened = false;

	burgerToogleButton.addEventListener("click", function () {
		if (!burgerOpened) return openBurger();
		closeBurger();
	});

	function closeBurger() {
		Array.from(burgerLines).map((line) => (line.style.display = "block"));
		burgerCloseIcon.style.display = "none";
		burgerNav.style.left = "-100%";
		burgerOpened = false;
	}

	function openBurger() {
		Array.from(burgerLines).map((line) => (line.style.display = "none"));
		burgerCloseIcon.style.display = "block";
		burgerNav.style.left = "0";
		burgerOpened = true;
	}
});
