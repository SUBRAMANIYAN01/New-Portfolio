document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".video-wrapper");

    wrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const button = wrapper.querySelector(".custom-play-btn");

        button.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                video.requestFullscreen();
                if(window.screen.width<720){
                  screen.orientation.lock('landscape');
                }
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
                if(window.screen.width<720){
                  screen.orientation.lock('portrait');
                }
            }
        });
    });
});


const roles = [
  "an Unreal Game Developer",
  "an Unity Game Developer",
  "a 3D Artist",
  "a Software Developer"
];

const roleText = document.getElementById("role-text");
let index = 0;

setInterval(() => {
  // Fade out and slide up
  roleText.style.opacity = "0";
  roleText.style.transform = "translateY(-20px)";

  setTimeout(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];

    // Reset position and fade in
    roleText.style.transform = "translateY(20px)";
    setTimeout(() => {
      roleText.style.opacity = "1";
      roleText.style.transform = "translateY(0)";
    }, 50);
  }, 500);
}, 2400);


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });}