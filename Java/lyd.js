document.addEventListener("DOMContentLoaded", function() {
    const mySound = document.querySelector("#asound");
    const playPauseBtn = document.querySelector("#playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (mySound.paused) {
            mySound.play();
            playPauseBtn.textContent = "Pause";
        } else {
            mySound.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    mySound.addEventListener("ended", function() {
        playPauseBtn.textContent = "Play";
    });
});
