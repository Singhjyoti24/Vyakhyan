const textEle = [
  "Check availability of Lecture Halls",
  "Update and Book your LT's",
  "No clashes only classes",
  "First Come First Book",
];

const textChange = document.querySelector(".text-change");

window.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    let ran = changeText(textEle);
    textChange.innerHTML = textEle[ran];
  }, 2000);
});

function changeText(textEle) {
  let ran = Math.floor(Math.random() * textEle.length);
  return ran;
}

const btn = document.querySelector(".btn");
const mainImg = document.querySelector(".main-img");
const mainContent = document.querySelector(".main-content");
btn.addEventListener("mousemove", function () {
  mainContent.classList.toggle("blur");
});

const line = document.querySelector(".line");
window.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    line.classList.toggle("line-change");
  }, 2000);
});
