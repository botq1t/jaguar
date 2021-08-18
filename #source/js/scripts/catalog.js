$(document).ready(function() {
  $('.catalog__title').click(function() {
    $(this).toggleClass('active').next().slideToggle();
    $(this).parent().toggleClass('active');
    $(this).next().css('display', 'flex');
  });

  $('.catalog__list').empty();
// Names unsorted
  for (var i = 0; i < n; i++) {
    if (i % 10 == 0) {
      if (i != 0) {
        if (i != n) {
          $('#names_unsorted').append('<br>');
        };
      };
    };

    $('#names_unsorted').append('<li>'+(i+1)+'. '+names[i]+'</li>');
  };
// Surames unsorted
  for (var i = 0; i < s; i++) {
    if (i % 10 == 0) {
      if (i != 0) {
        if (i != s) {
          $('#surnames_unsorted').append('<br>');
        };
      };
    };

    $('#surnames_unsorted').append('<li>'+(i+1)+'. '+surnames[i]+'</li>');
  };

});
