// @prepros-append names.js
// @prepros-append surnames.js
// @prepros-append random.js
// @prepros-append burger.js
// @prepros-append old.js

var hi = new Audio('audio/yager/koroche_zdorova.mp3');

$('.header').click(function() {
  hi.play();
});
