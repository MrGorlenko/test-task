document.addEventListener("DOMContentLoaded", function () {
	const attachButtonWidget = document.getElementById("attachFile");
	const fileInput = document.getElementById("fileInput");

	attachButtonWidget.addEventListener("click", () => {
		fileInput.click();
	});
});
