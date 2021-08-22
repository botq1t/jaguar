$(document).ready(function() {
  var uniq=Math.floor(1/(n*s)*100*10000)/10000;
  $('#uniqueness').empty().append(uniq+'%');
});
// Звуки
var a_a = new Audio('audio/yager/ten_th.mp3');
var a_r = new Audio('audio/yager/chel.mp3');
var a_c = new Audio('audio/yager/kruto.mp3');
var r_r = new Audio('audio/yager/tajika.mp3');
var r_c = new Audio('audio/yager/nekruto.mp3');
var c_c = new Audio('audio/yager/udachi.mp3');

// Рандомер
$('#ranbut').click(function() {

  var rarity_n = Math.floor((Math.random()*100)+1);
  var rarity_s = Math.floor((Math.random()*100)+1);

  // console.log('Редкость имени: '+rarity_n);
  // console.log('Редкость фамилии: '+rarity_s);

  $('#name #surname').show(500);
  // Ранмодим имя
  if (rarity_n < 6) {
    if ($('#name').hasClass('rare')) {
      $('#name').toggleClass('rare')
    }
    if ($('#name').hasClass('common')) {
      $('#name').toggleClass('common')
    }
    if ($('#name').hasClass('arcane') == false) {
      $('#name').toggleClass('arcane')
    }
    var rn = Math.floor(Math.random()*(names_a.length));
    $('#name').empty().append(names_a[rn]);
    // console.log('Аркана: '+(rn+1), names_a[rn]);
    var n_r = 'Arcane';
  } else {if (rarity_n < 26) {
            if ($('#name').hasClass('common')) {
              $('#name').toggleClass('common')
            }
            if ($('#name').hasClass('arcane')) {
              $('#name').toggleClass('arcane')
            }
            if ($('#name').hasClass('rare') == false) {
              $('#name').toggleClass('rare')
            }
            var rn = Math.floor(Math.random()*(names_r.length));
            $('#name').empty().append(names_r[rn]);
            // console.log('Рарка: '+(rn+1), names_r[rn]);
            var n_r = 'Rare';
          } else {
              if ($('#name').hasClass('arcane')) {
                $('#name').toggleClass('arcane')
              }
              if ($('#name').hasClass('rare')) {
                $('#name').toggleClass('rare')
              }
              if ($('#name').hasClass('common') == false) {
                $('#name').toggleClass('common')
              }
              var rn = Math.floor(Math.random()*(names_c.length));
              $('#name').empty().append(names_c[rn]);
              // console.log('Коммонка: '+(rn+1), names_c[rn]);
              var n_r = 'Common';
            }
    }
  // Рандомим фамилию
  if (rarity_s < 6) {
    if ($('#surname').hasClass('rare')) {
      $('#surname').toggleClass('rare')
    }
    if ($('#surname').hasClass('common')) {
      $('#surname').toggleClass('common')
    }
    if ($('#surname').hasClass('arcane') == false) {
      $('#surname').toggleClass('arcane')
    }
    var rs = Math.floor(Math.random()*(surnames_a.length));
    $('#surname').empty().append(surnames_a[rs]);
    // console.log('Аркана: '+(rs+1), surnames_a[rs]);
    var s_r = 'Arcane';
  } else {if (rarity_s < 26) {
            if ($('#surname').hasClass('common')) {
              $('#surname').toggleClass('common')
            }
            if ($('#surname').hasClass('arcane')) {
              $('#surname').toggleClass('arcane')
            }
            if ($('#surname').hasClass('rare') == false) {
              $('#surname').toggleClass('rare')
            }
            var rs = Math.floor(Math.random()*(surnames_r.length));
            $('#surname').empty().append(surnames_r[rs]);
            // console.log('Рарка: '+(rs+1), surnames_r[rs]);
            var s_r = 'Rare';
          } else {
              if ($('#surname').hasClass('arcane')) {
                $('#surname').toggleClass('arcane')
              }
              if ($('#surname').hasClass('rare')) {
                $('#surname').toggleClass('rare')
              }
              if ($('#surname').hasClass('common') == false) {
                $('#surname').toggleClass('common')
              }
              var rs = Math.floor(Math.random()*(surnames_c.length));
              $('#surname').empty().append(surnames_c[rs]);
              // console.log('Коммонка: '+(rs+1), surnames_c[rs]);
              var s_r = 'Common';
            }
    }
  // Показываем футер
  // $('#genfoo').css('display', 'block');
  $('#genfoo').slideDown(300);

  if (n_r == 'Common') {
    if (s_r == 'Common') {
      $('#text_rarity').empty().append('Damn, just a commons dude...');
      c_c.play();
    } else {
        if (s_r == 'Rare') {
          $('#text_rarity').empty().append('Rare surname, not bad, but the name is common;)');
          r_c.play();
        } else {
            $('#text_rarity').empty().append('Yeah, arcane surname! But the name still be common. Anyway, u fine, really :p');
            a_c.play();
          }

      }
  } else {
      if (n_r == 'Rare') {
        if (s_r == 'Common') {
          $('#text_rarity').empty().append('Huh, rare name, but surname is common, thats not ideal variant');
          r_c.play();
        } else {
            if (s_r == 'Rare') {
              $('#text_rarity').empty().append('Good combo! Rare name and surname. Cool, really cool');
              r_r.play();
            } else {
                $('#text_rarity').empty().append('Geez, rare name and arcane surname. Really awesome combination!');
                a_r.play();
              }
            }
      } else {
        if (s_r == 'Common') {
          $('#text_rarity').empty().append('Ohh, man, it\'s arcane name! Really cool, so sad that the surname is common ;(');
          a_c.play();
        } else {
            if (s_r == 'Rare') {
              $('#text_rarity').empty().append('Wow! Name is arcane and surname is rare! Close to ideal :)');
              a_r.play();
            } else {
                $('#text_rarity').empty().append('OMG, U FUCKING CRAZY!');
                a_a.play();
              }
            }
        }
    }



});
