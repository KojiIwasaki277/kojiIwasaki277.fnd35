'use strict'

const imgList = [
  "img/img1.png",
  "img/img2.png",
  "img/img3.png",
  "img/img4.png",
  "img/img5.png",
  "img/img6.png",
  "img/img7.png",
  "img/img8.png",
  "img/img9.png",
];

function selectPicture() {
  let imgNumber = Math.floor(Math.random() * imgList.length);
  let imgSrc = "<" + "img src=" + imgList[imgNumber] + ">";
  target.innerHTML = imgSrc;
}

const target = document.getElementById("target");
const button = document.getElementById("myButton");

button.addEventListener("click", selectPicture);
