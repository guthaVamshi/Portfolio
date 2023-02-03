var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (window.screen.availWidth < 425) {
  x = 30;
} else if (
  (window.screen.availWidth > 425) |
  (window.screen.availWidth <= 768)
) {
  x = 70;
} else {
  x = 150;
}

var stars = [], // Array that contains the stars
  FPS = 60, // Frames per second
  // Number of stars
  mouse = {
    x: 0,
    y: 0,
  }; // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function distance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

function redirect() {
  window.open("https://github.com/guthaVamshi/codeSmashers", "_blank");
  modal.style.display = "none";
}
function redirect2() {
  window.open("https://github.com/guthaVamshi/AMkart", "_blank");
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
};
nothanks.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
nothanks2.onclick = function () {
  modal2.style.display = "none";
};
$(".TopHead").hide();
var wid = $(window).width();
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    mybutton.style.display = "block";
    $(".TopHead").fadeIn(600);
  } else {
    $(".TopHead").fadeOut(100);
    mybutton.style.display = "none";
  }
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

let mybutton = document.getElementById("btn-back-to-top");

mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var dob = new Date("10/23/2000");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);   
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById('myAge').innerHTML=age;
const presentyear=new Date();
document.getElementById('year').innerHTML= presentyear.getFullYear();