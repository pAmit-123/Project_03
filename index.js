//Detecting click button name

var all = document.querySelectorAll(".drum").length;
for (var index = 0; index < all; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      const keys = this.innerHTML;
      makesound(keys);
      Animation(keys);
    });
}

//Detecting keyboard button press
document.addEventListener("keypress", (event) => {
  makesound(event.key);
  Animation(event.key);
});

function makesound(keys) {
  switch (keys) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function Animation(press){
    document.querySelector("." +press).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+press).classList.remove("pressed");        
    }, 100);
}
