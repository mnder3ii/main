$("#v-a-wrp").hide();

$("#close_note").on("click", function () {
  $("#hero1").slideUp(function () {
      $("#v-a-wrp").fadeIn("slow");
  });
});

$("#v-gain").on("click", function () {
    $("#v-a-wrp").hide();
    $("#hero1").slideDown();
});

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 50) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
});
  
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function callMe() {
    window.location.href = 'tel:0096594011258'; // Replace with your phone number
}

function sendEmail() {
    window.location.href = 'mailto:Contact@mno90.com?subject=Hello&body=I wanted to reach out to you...'; // Replace with your email address, subject, and body
  }

$("#git_h").click(function() {
    // Open the link in a new tab or window
    window.open('https://github.com/mnder3ii', '_blank');
});

$('#o_cv').click(function() {
  window.location.href = './cv.html';
});

$('#o_pro').click(function() {
  window.location.href = './projects.html';
});

$("#git_h1").click(function() {
  // Open the link in a new tab or window
  window.open('https://github.com/mnder3ii', '_blank');
});

$('#o_cv1').click(function() {
window.location.href = './cv.html';
});

$('#o_hom').click(function() {
  window.location.href = './index.html';
});


$("#lstvid").click(function() {
  // Open the link in a new tab or window
  window.open('https://youtu.be/3JnQECBWED4', '_blank');
});

$("#ytchnn").click(function() {
  // Open the link in a new tab or window
  window.open('https://www.youtube.com/@mno90', '_blank');
});




