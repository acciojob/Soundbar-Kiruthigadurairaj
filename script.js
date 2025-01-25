function soundPlay(audioPlayer){ 
let audioPlayer = document.getElementsByClassName("btn");
audioPlayer.src = "D:\New folder\sound\short-crowd-cheer-6713.mp3"+ soundbar;
audioPlayer.play();
}
btns.addEventListener("click", soundPlay);
function soundPlay(audioPlayer){ 
    let audioPlayer = document.getElementsByClassName("btn");
    audioPlayer.src = "D:\New folder\sound\boo-6377.mp3" + soundbar;
    audioPlayer.play();
    }
    btns.addEventListener("click", soundPlay);


function soundStop(){
    let audioPlayer = getElementsByClassName("stop");
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}