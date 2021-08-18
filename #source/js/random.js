document.querySelector('.header').style.backgroundImage = `url("img/header/yager${Math.floor((Math.random()*5)+1)}.jpg")`;
console.log(document.querySelector('.header').style.backgroundImage);

$(document).ready(function() {
  var uniq=Math.floor(1/(n*s)*100*1000)/1000;
  $('#uniqueness').empty().append(uniq+'%');
});

var audio1 = new Audio('audio/Soundpack/roblox.mp3');
var audio2 = new Audio('audio/Soundpack/hurt.mp3');
var audio3 = new Audio('audio/Soundpack/fart.mp3');

$('#ranbut').click(function() {
  audio2.play();

  var rarity_n = Math.floor((Math.random()*100)+1);
  var rarity_s = Math.floor((Math.random()*100)+1);

  console.log('Редкость имени: '+rarity_n);
  console.log('Редкость фамилии: '+rarity_s);

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
    console.log('Аркана: '+(rn+1), names_a[rn]);
    var n_r = 'Arcane';
  } else {if (rarity_n < 21) {
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
            console.log('Рарка: '+(rn+1), names_r[rn]);
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
              console.log('Коммонка: '+(rn+1), names_c[rn]);
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
    console.log('Аркана: '+(rs+1), surnames_a[rs]);
    var s_r = 'Arcane';
  } else {if (rarity_s < 21) {
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
            console.log('Рарка: '+(rs+1), surnames_r[rs]);
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
              console.log('Коммонка: '+(rs+1), surnames_c[rs]);
              var s_r = 'Common';
            }
    }
  // Показываем футер
  // $('#genfoo').css('display', 'block');

  if (n_r == 'Common') {
    if (s_r == 'Common') {
      $('#text_rarity').empty().append('Damn, just a commons dude...');
    } else {
        if (s_r == 'Rare') {
          $('#text_rarity').empty().append('Rare surname, not bad, but the name is common;)');
        } else {
            $('#text_rarity').empty().append('Yeah, arcane surname! But the name still be common. Anyway, u fine, really :p');
          }

      }
  } else {
      if (n_r == 'Rare') {
        if (s_r == 'Common') {
          $('#text_rarity').empty().append('Huh, rare name, but surname is common, thats not ideal variant');
        } else {
            if (s_r == 'Rare') {
              $('#text_rarity').empty().append('Good combo! Rare name and surname. Cool, really cool');
            } else {
                $('#text_rarity').empty().append('Geez, rare name and arcane surname. Really awesome combination!');
              }
            }
      } else {
        if (s_r == 'Common') {
          $('#text_rarity').empty().append('Ohh, man, it\'s arcane name! Really cool, so sad that the surname is common ;(');
        } else {
            if (s_r == 'Rare') {
              $('#text_rarity').empty().append('Wow! Name is arcane and surname is rare! Close to ideal :)');
            } else {
                $('#text_rarity').empty().append('OMG, U FUCKING CRAZY!');
              }
            }
        }
    }

  $('#genfoo').slideDown(300);
});
