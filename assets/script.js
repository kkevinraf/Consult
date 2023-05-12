var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<div class="icon pause"></div><div class="label">Pause</div>';
  } else {
    video.pause();
    btn.innerHTML = '<div class="icon play"></div><div class="label">Play</div>';
  }
}