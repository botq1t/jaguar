const music = document.querySelector('.music__audio');

$('.footer').dblclick(function() {
  $('.music').toggleClass('active');
});

$('.music__play').click(function() {
  $(this).toggleClass('active');
  $('.music__outline').toggleClass('active');

  if ($(this).hasClass('active')) {
    $(this).children('img').attr('src', 'img/music/pause.svg');
    music.play();
  } else {
    $(this).children('img').attr('src', 'img/music/play.svg');
    music.pause();
  }
});
