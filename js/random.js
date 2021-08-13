const rns = document.querySelector('.generator__content');
const uni = document.querySelector('.chance__amount');
const uni2 = document.querySelector('.chance');

document.querySelector('.header').style.backgroundImage = `url("img/header/yager${Math.round(Math.random()*4)}.jpg")`;


// console.log(rns.innerText);
// console.log(uni.innerText);
// console.log(uni2);
var uniq=Math.floor(1/(n*s)*100*1000)/1000;

function randomer() {
  var rn = Math.round(Math.random()*(n-1));
  var rs = Math.round(Math.random()*(s-1));

  rns.innerText = `${names[rn]} ${surnames[rs]}`
  rns.style.color = `#d01d1d`;
  rns.style.fontWeight = `bold`;
  rns.style.fontSize = `30px`;

  uni2.style.display = `flex`;
  uni.innerText = `${uniq}%`
  uni.style.color = `#d01d1d`;
  uni.style.fontWeight = `bold`;
  uni.style.fontSize = `30px`;
}
