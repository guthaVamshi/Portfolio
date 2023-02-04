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