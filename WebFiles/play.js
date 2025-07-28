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


const roles = [
  "Unreal Game Developer",
  "Unity Game Developer",
  "3D Artist",
  "Software Developer"
];

const roleText = document.getElementById("role-text");
let index = 0;

setInterval(() => {
  // Slide up (fade out)
  roleText.style.opacity = "0";
  roleText.style.transform = "translateY(-20px)";

  setTimeout(() => {
    // Change text after fade out
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];

    // Reset position and fade in
    roleText.style.transform = "translateY(20px)";
    setTimeout(() => {
      roleText.style.opacity = "1";
      roleText.style.transform = "translateY(0)";
    }, 50);
  }, 500);
}, 3000); // 3 seconds per role
