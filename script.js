var i = 0;
var txt = 'vamshi gutha';
var speed = 50;

window.onload=function typeWriter() {
  if (i < txt.length) {
    document.getElementById("vamshi").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

