var songFile = "audio/1.mp3";
var songName = "";

var volume = 5;
var audio = new Audio(songFile);

audio.volume = volume / 10;

var player = document.getElementById("player");
var playButton = document.getElementById("play-btn");
var volUpButton = document.getElementById("vol-up");
var volDownButton = document.getElementById("vol-down");
var statusText = document.getElementById("status");
var songNameText = document.getElementById("song-name");
var volumeFill = document.getElementById("volume-fill");


function togglePlay() {

  if (songFile === "") {
    statusText.textContent = "add your song in script.js";
    return;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


let volumeUp=()=> {
  if (volume < 10) {
    volume = volume + 1;
  }
  updateVolume();
}

let volumeDown=()=> {
  if (volume > 0) {
    volume = volume - 1;
  }
  updateVolume();
}


let updateVolume=()=> {
  audio.volume = volume / 10;
  volumeFill.style.width = volume * 10 + "%";
}



audio.addEventListener("play", function () {
  playButton.textContent = "Pause";
  statusText.textContent = "playing";
  player.classList.add("is-playing");
});

audio.addEventListener("pause", function () {
  playButton.textContent = "Play";
  statusText.textContent = "paused";
  player.classList.remove("is-playing");
});






playButton.addEventListener("click", togglePlay);
volUpButton.addEventListener("click", volumeUp);
volDownButton.addEventListener("click", volumeDown);

playButton.addEventListener ("click",()=>{
  console.log("Clicked")
})



document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();   
    togglePlay();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();  
    volumeUp();
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    volumeDown();
  }
});


if (songFile === "") {
  songNameText.textContent = "no song added yet";
} else if (songName !== "") {
  songNameText.textContent = songName;
} else {
  songNameText.textContent = songFile;
}

updateVolume();