document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".video-wrapper");

    wrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const button = wrapper.querySelector(".custom-play-btn");

        button.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                video.requestFullscreen();
                button.textContent = "⏸";
            } else {
                video.pause();
                button.textContent = "▶";
            }
        });

        // Handle exit from fullscreen
        document.addEventListener("fullscreenchange", () => {
            const isFullScreen = document.fullscreenElement === video;
            if (!isFullScreen && !video.paused) {
                video.pause();
                button.textContent = "▶";
                video.currentTime=0;
            }
        });
    });
});
