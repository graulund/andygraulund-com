const videoProgressIndicatorCircumference = 2 * Math.PI * 9;

const videoProgressIndicatorHtml = `
<svg class="video-progress__canvas" viewBox="0 0 20 20">
	<circle class="video-progress__lower" cx="50%" cy="50%" r="9"></circle>
	<circle class="video-progress__upper" cx="50%" cy="50%" r="9"></circle>
</svg>
`;

window.addEventListener("DOMContentLoaded", () => {
	if (!window.Vimeo) {
		console.warn("No Vimeo found on page");
		return;
	}

	const videoEls = document.querySelectorAll(".vimeo-container");

	videoEls.forEach((videoEl) => {
		const playerEl = videoEl.querySelector("iframe");

		const progressIndicatorEl = document.createElement("div");
		progressIndicatorEl.className = "video-progress";
		progressIndicatorEl.title = "Current video progress";
		progressIndicatorEl.setAttribute("role", "presentation");
		progressIndicatorEl.setAttribute("aria-hidden", "true");
		progressIndicatorEl.innerHTML = videoProgressIndicatorHtml;
		videoEl.appendChild(progressIndicatorEl);

		const fullscreenBtnEl = document.createElement("button");
		fullscreenBtnEl.className = "video-fullscreen-button";
		fullscreenBtnEl.title = "Full screen";
		fullscreenBtnEl.setAttribute("aria-hidden", "true");
		videoEl.appendChild(fullscreenBtnEl);

		const player = new window.Vimeo.Player(playerEl);
		const progressEl = videoEl.querySelector(".video-progress__upper");

		// Update progress circle
		player.on("timeupdate", function (data) {
			const { percent } = data;
			progressEl.style.strokeDashoffset = (1 - percent)
				* videoProgressIndicatorCircumference;
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
	});
});
