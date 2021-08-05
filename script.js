var i = 0;
var txt = 'vamshi gutha';
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("vamshi").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
function redirect() {
  window.open('https://github.com/guthaVamshi/codeSmashers', '_blank');
  modal.style.display = "none";
}
function redirect2() {
  window.open('https://github.com/guthaVamshi/AMkart', '_blank');
  modal2.style.display = "none";
}
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var nothanks = document.getElementById("nothanks");
var nothanks2 = document.getElementById("nothanks2");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
btn.onclick = function () {
  modal.style.display = "block";
}
nothanks.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
nothanks2.onclick = function () {
  modal2.style.display = "none";
}


