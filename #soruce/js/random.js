const rns = document.querySelector('.gen__random');
const uni = document.querySelector('.gen__chance-2');
const uni2 = document.querySelector('.gen__footer');

document.querySelector('.header').style.backgroundImage = `url("img/header/yager${Math.round(Math.random()*4)}.jpg")`;


// console.log(rns.innerText);
// console.log(uni.innerText);
// console.log(uni2);
var uniq=Math.floor(1/(n*s)*100*1000)/1000;

function randomer() {
  var rn = Math.round(Math.random()*(n-1));
  var rs = Math.round(Math.random()*(s-1));

  rns.style.display = `inline`;
  rns.innerText = `${names[rn]} ${surnames[rs]}`
  rns.style.color = `#cb0c0c`;

  uni.style.display = `inline`;
  uni.innerText = `${uniq}%`
  // uni.style.color = `#cb0c0c`;

  uni2.style.display = `block`;
  uni2.innerText = `Not Bad ;)`
}
