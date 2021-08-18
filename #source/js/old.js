$(document).ready(function() {
// Открытие генератора
  $('#old_open').click(function() {
    $('.old, .old__card').toggleClass('active');
    $('body').toggleClass('lock');
  });
// Закрытие генераора
  $('#old_close').click(function() {
    $('.old, .old__card').toggleClass('active');
    $('body').toggleClass('lock');
  });
// Анимация открытия списка имён и фамилий
  $('.nslist__title').click(function() {
    $(this).toggleClass('active').next().slideToggle(400);

  });
// Генерация рандомного числа
  $('#old_names_button').click(function() {
    $('#old_number').empty().append(Math.floor(Math.random()*names.length+1));
  });

  $('#old_surnames_button').click(function() {
    $('#old_number').empty().append(Math.floor(Math.random()*surnames.length+1));
  });
// Заполнение списка имён и фамилий
  $('.nslist__marks').empty();

  for (var i = 0; i < n; i++) {
    if (i % 10 == 0) {
      if (i != 0) {
        if (i != n) {
          $('#old_names_list').append('<br>');
        };
      };
    };

    $('#old_names_list').append('<li>'+(i+1)+'. '+names[i]+'</li>');
  };

  for (var i = 0; i < s; i++) {
    if (i % 10 == 0) {
      if (i != 0) {
        if (i != s) {
          $('#old_surnames_list').append('<br>');
        };
      };
    };

    $('#old_surnames_list').append('<li>'+(i+1)+'. '+surnames[i]+'</li>');
  };

});
