var score=0;
function decrease(){
    score=score-10;
    document.getElementById("box").textContent=score;
}
function increase(){
    score=score+10;
    document.getElementById("box").textContent=score;
}
var div = document.getElementById("d2");
var display = 0;

function hideshow() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}