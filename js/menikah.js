// music control
let played = true;
$(document).ready(function() {
    // the site has now loaded, grab the video!
    bgAudio = document.getElementById("bgm");
    // now tweak the volume!
    bgAudio.volume = 0.3;
    // now, play it!
    bgAudio.play();
});

function toggleMuteAudio(){
    played = !played;
    $("#bgm").prop("muted",!$("#bgm").prop("muted"));
    console.log(played);
    played? $("#toggleMusic").attr("src", "img/speaker-filled-audio-tool.png") : $("#toggleMusik").attr("src", "img/no-sound.png");
}

window.addEventListener('load', function () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createBufferSource();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'audio-autoplay.wav');
    xhr.responseType = 'arraybuffer';
    xhr.addEventListener('load', function (r) {
        audioCtx.decodeAudioData(
                xhr.response, 
                function (buffer) {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.loop = false;
                });
        source.start(0);
    });
    xhr.send();
});

// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
