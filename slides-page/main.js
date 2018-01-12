/* Changes the background color of the boxes in the navigation bar depending upon which one has been pressed. */
function changeNavigationStyle(navPosition) {
  var navigation = document.getElementsByClassName("nav-item");
  for(var i = 0; i < navigation.length; i++) {
	navigation[i].className = navigation[i].className.replace(" active", " non-active");
  }
  navigation[navPosition-1].className += " active";
}

/* Make the navigation bar stick to the top of the page when the user scrolls past a certain point. */

/*
$(window).scroll(function() {
  var navMenu = document.getElementById("navigation-menu");
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $("#navigation-menu").addClass("navbar-fixed");
  }
  else {
	$("#navigation-menu").removeClass("navbar-fixed");
  }
});
*/

/* Shows the Back-to-Top Button when the user scrolls down 20 pixels from the top of the document. */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
	document.getElementById("topBtn").style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0; /* Chrome, Safari, Opera. */
  document.documentElement.scrollTop = 0; /* IE and Firefox */ 
}

/* Allow the user to exit the "contact" modal by clicking outside of the modal content. */
var modal = document.getElementById("first-modal");
window.onclick = function(event) {
  if(event.target == modal) {
	modal.style.display = "none";
  }
}	

/* Begin the slideshow with the first slide. */
var slideIndex = 1;
showSlides(slideIndex);

/* Used when the user clicks on the previous and next arrows. */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Used when the user clicks on one of the dots. */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i; /* For-Loop Iteration Variable */
  var slides = document.getElementsByClassName("mySlides"); /* Array of Slide Images/Videos */
  var dots = document.getElementsByClassName("dot"); /* Array of "Dots"/Navigation Tools Below Slideshow */
  var video = document.getElementById("A2");
  if(n > slides.length) {slideIndex = 1;} /* If the Slide Index exceeds the maximum number of slides, reset it to the leftmost slide. */
  if(n < 1) {slideIndex = slides.length;} /* If the Slide Index exceeds the minimum number of slides, set it to the rightmost slide. */
  for(i = 0; i < slides.length; i++) { /* Initialize the pictures to a non-shown state. */
    slides[i].style.display = "block"; 
  }
  for(i = 0; i < dots.length; i++) { /* Initialize the dots to a non-active state. */
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; /* Show the picture that has been chosen. */
  dots[slideIndex-1].className += " active"; /* Make active the dot which corresponds to the chosen picture. (Gives the dot a light blue color.) */
  
  /* Pauses and Plays the Video depending upon if it is the current slide. */
  if(slideIndex-1 != 4)
	video.pause();

}

function pauseVideo() {
  var video = document.getElementById("A2");
  if(video.paused == true)
	video.play();
  else
	video.pause();
}

$(document).ready(main);

/* Allow the user to press the "Courses Taken" buttons in the courses section. Alter style accordingly. */
function main() {
  $(".all-courses").hide();
  $(".all-courses").fadeIn(2500);
  $(".courses").hide();
  
  $(".courses-button").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("courses-showing");
    if($(this).text() === "Courses Taken") {
	  $(this).text("Viewing Courses");
	} else {
	  $(this).text("Courses Taken");
	}	
  });
}








