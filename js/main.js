// CurrentYear

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

// navbar hide
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

let isNavbarHidden = false;

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navbarCollapse.classList.add('hide');
    isNavbarHidden = true;
  });
});

navbarToggler.addEventListener('click', () => {
  if (isNavbarHidden) {
    navbarCollapse.classList.remove('hide');
    isNavbarHidden = false;
  }
});

// Hide navbar after 5 seconds
setTimeout(() => {
  navbarCollapse.classList.add('hide');
  isNavbarHidden = true;
}, 50);




//  WOW  ANIMATION
new WOW().init();



// SHOWANDHIDE AD
if (window.matchMedia('(max-width: 1024px)').matches) {
  'use strict';

$(document).ready(function() {
  setTimeout(function() {
    $('#adImg').show();
  }, 10000);
});
  
  
function closeAd() {
   $('#adImg').hide();
}
}	


// TIMER COUNTDOWN 
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="time"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);




// TIMER COUNTDOWN;

let timer = (new Date().getTime() / 1000) + (86400 * 8) + 1;
let flipdown = new FlipDown(timer) // countdown for 24 hours
  .start()
    .ifEnded(() => {
    console.log("The countdown has ended!");
  });
document.getElementById("flipdown").appendChild(flipdown.el);


// show and hide video

function hide () {
  document.getElementById("video_show").style.display = "none";
}

  
let video = document.getElementById("myVideo");

function show() {

  document.getElementById("video_show").style.display = "block";
  video.muted = false;

}
//window.location.replace("https://www.example.com/message?msg=Visit our website on your desktop to see our offer time limited");