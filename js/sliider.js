document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("sliderContainer");
	const draggable = document.getElementById("sliderThumb");
	const sliderValue = document.getElementById("sliderValue");
	const sliderInput = document.getElementById("slider");

	let active = false;
	let currentX;
	let initialX;
	let xOffset = 0;

	draggable.addEventListener("mousedown", dragStart, false);
	document.addEventListener("mouseup", dragEnd, false);
	document.addEventListener("mousemove", drag, false);

	function dragStart(e) {
		initialX = e.clientX - xOffset;

		if (e.target === draggable) {
			active = true;
		}
	}

	function dragEnd(e) {
		initialX = currentX;
		active = false;
	}

	function drag(e) {
		if (active) {
			e.preventDefault();

			currentX = e.clientX - initialX;
			xOffset = currentX;

			setTranslate(currentX, draggable);
		}
	}

	function setTranslate(xPos, el) {
		const rect = container.getBoundingClientRect();
		const drRect = draggable.getBoundingClientRect();

		if (xPos < 0) {
			xPos = 0;
		} else if (xPos > rect.width - drRect.width + 18) {
			xPos = rect.width - drRect.width + 18;
		}

		updateThumbPosition(el, xPos);
		updateSliderValue(sliderValue, xPos);
	}

	function updateThumbPosition(elThumb, xPos) {
		elThumb.style.transform = `translate3d(${xPos}px, 0px, 0)`;
	}

	function updateSliderValue(el, value) {
		const fullWidthInPixels = container.clientWidth;
		const percentValue = ((value * 100) / fullWidthInPixels).toFixed(0);
		el.innerText = `${percentValue}%`;
		sliderInput.value = percentValue;
	}
});
