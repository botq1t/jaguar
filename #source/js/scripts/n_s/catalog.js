$(document).ready(function() {
  $('.catalog__title_text').click(function() {
    if ($('.main__row').hasClass('one')) {
      $('.catalog__title_text').not($(this)).removeClass('active');
      $('.catalog__title_text').not($(this)).parent().next().slideUp();
    }
    $(this).toggleClass('active');
    $(this).parent().next().slideToggle();
  });
// Sorting toggler

  $('.catalog__button').click(function() {
      if ($(this).text() == 'Initial') {
        $(this).text('Sorted');
        $(this).parent().next().children('ul:first').fadeOut(150);
        $(this).parent().next().children('ul:last').delay(130).fadeIn(170);
      } else {
        $(this).text('Initial');
        $(this).parent().next().children('ul:last').fadeOut(150);
        $(this).parent().next().children('ul:first').delay(130).fadeIn(170);
      };
  });

// Clear listes
  $('.catalog__list').empty();
// Names unsorted
  for (var i = 0; i < n; i++) {
    if (i % 10 == 0) { if (i != 0) { if (i != n) {
      $('#names_unsorted').append('<li class="divider"></li>');
    }; }; };

    $('#names_unsorted').append('<li>'+(i+1)+'. '+names[i]+'</li>');
  };
// Names sorted
  var first_letter = namessort[0][0];
  var j = 1;
  $('#names_sorted').append('<li class="first_letter">'+first_letter+'</li>');
  for (var i = 0; i < n; i++) {
    if (namessort[i][0] != first_letter) {
      first_letter = namessort[i][0];
      $('#names_sorted').append('<li class="first_letter">'+first_letter+'</li>');
      j = 1;
    }

    $('#names_sorted').append('<li>'+j+'. '+namessort[i]+'</li>');
    j++;
  };
// Surames unsorted
  for (var i = 0; i < s; i++) {
    if (i % 10 == 0) { if (i != 0) { if (i != s) {
      $('#surnames_unsorted').append('<li class="divider"></li>');
    }; }; };

    $('#surnames_unsorted').append('<li>'+(i+1)+'. '+surnames[i]+'</li>');
  };
// Surnames sorted
  var first_letter = surnamessort[0][0];
  var j = 1;
  $('#surnames_sorted').append('<li class="first_letter">'+first_letter+'</li>');
  for (var i = 0; i < s; i++) {
    if (surnamessort[i][0] != first_letter) {
      first_letter = surnamessort[i][0];
      $('#surnames_sorted').append('<li class="first_letter">'+first_letter+'</li>');
      j = 1;
    }

    $('#surnames_sorted').append('<li>'+j+'. '+surnamessort[i]+'</li>');
    j++;
  };
});
