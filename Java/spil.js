document.querySelector("#asound").play();
document.querySelector("#asound").pause();



function playMySound() {mySound.currentTime = 0;mySound.play();}

if(mySound.paused === true) {mySound.play();} else {mySound.pause();}

mySound.addEventlistener("ended", playMySound);function playMySound() {mySound.play();}
