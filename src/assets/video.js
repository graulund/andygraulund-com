const videoProgressIndicatorCircumference = 2 * Math.PI * 9;

const videoProgressIndicatorHtml = `
<svg class="video-progress__canvas" viewBox="0 0 20 20">
	<circle class="video-progress__lower" cx="50%" cy="50%" r="9"></circle>
	<circle class="video-progress__upper" cx="50%" cy="50%" r="9"></circle>
</svg>
`;

window.addEventListener("DOMContentLoaded", () => {
	const videoEls = document.querySelectorAll(".video-container");
	const videos = [];

	const loadVideo = (playerEl) => {
		if (playerEl.src || !playerEl.dataset.src) return;

		playerEl.src = playerEl.dataset.src;
		playerEl.removeAttribute("data-src");
		playerEl.load();
	};

	const playVideo = (playerEl) => {
		loadVideo(playerEl);
		playerEl.play().catch(() => {
			// Muted autoplay can still be blocked by browser or system settings.
		});
	};

	videoEls.forEach((videoEl) => {
		const playerEl = videoEl.querySelector("video");
		if (!playerEl) return;

		videos.push({ videoEl, playerEl, isVisible: false });

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
		fullscreenBtnEl.type = "button";
		fullscreenBtnEl.setAttribute("aria-label", "View video in full screen");
		videoEl.appendChild(fullscreenBtnEl);

		const progressEl = videoEl.querySelector(".video-progress__upper");

		// Update progress circle
		playerEl.addEventListener("timeupdate", function () {
			const percent = playerEl.duration
				? playerEl.currentTime / playerEl.duration
				: 0;
			progressEl.style.strokeDashoffset = (1 - percent)
				* videoProgressIndicatorCircumference;
		});

		// Handle custom fullscreen button click/tap
		fullscreenBtnEl.addEventListener("click", async function () {
			if (videoEl.requestFullscreen) {
				await videoEl.requestFullscreen();
			} else if (videoEl.webkitRequestFullscreen) {
				videoEl.webkitRequestFullscreen();
			} else if (playerEl.webkitEnterFullscreen) {
				playerEl.webkitEnterFullscreen();
			}
		});

		playerEl.addEventListener("webkitendfullscreen", function () {
			const video = videos.find(({ playerEl: item }) => item === playerEl);
			if (video?.isVisible) playVideo(playerEl);
		});
	});

	if (!("IntersectionObserver" in window)) {
		videos.forEach(({ playerEl }) => playVideo(playerEl));
		return;
	}

	const loadObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;

			const playerEl = entry.target.querySelector("video");
			if (playerEl) loadVideo(playerEl);
			observer.unobserve(entry.target);
		});
	}, { rootMargin: "500px 0px" });

	const playbackObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const video = videos.find(({ videoEl }) => videoEl === entry.target);
			if (!video) return;

			video.isVisible = entry.isIntersecting;
			if (video.isVisible && !document.hidden) {
				playVideo(video.playerEl);
			} else {
				video.playerEl.pause();
			}
		});
	}, { threshold: 0.01 });

	videos.forEach(({ videoEl }) => {
		loadObserver.observe(videoEl);
		playbackObserver.observe(videoEl);
	});

	document.addEventListener("visibilitychange", () => {
		videos.forEach(({ playerEl, isVisible }) => {
			if (isVisible && !document.hidden) {
				playVideo(playerEl);
			} else {
				playerEl.pause();
			}
		});
	});

	document.addEventListener("fullscreenchange", () => {
		if (document.fullscreenElement) return;

		videos.forEach(({ playerEl, isVisible }) => {
			if (isVisible) playVideo(playerEl);
		});
	});
});
