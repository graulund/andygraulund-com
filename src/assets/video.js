window.addEventListener("DOMContentLoaded", () => {
	if (window.Vimeo) {
		const playerEl = document.querySelector(".vimeo-frame");
		// TODO: Create these elements
		const progressEl = document.querySelector(".video-progress__upper");
		const fullscreenBtnEl = document.querySelector(".video-fullscreen-button");
		const player = new window.Vimeo.Player(playerEl);
		const circumference = 2 * Math.PI * 9;

		// Update progress circle
		player.on("timeupdate", function (data) {
			const { percent } = data;
			progressEl.style.strokeDashoffset = (1 - percent) * circumference;
		});

		player.on("pause", function (data) {
			// Fix glitch on mobile device where the player will automatically
			// pause after full screen
			player.play();
		});

		// Handle custom fullscreen button click/tap
		fullscreenBtnEl.addEventListener("click", function () {
			player.requestFullscreen();
		});
	} else {
		console.warn("No Vimeo found on page");
	}
});
