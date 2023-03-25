const caculation = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
};

// caculation.plus(10, 5);
// caculation.minus(10, 5);

document.title = "Good";

const title = document.querySelector("#title");
console.log("title: ", title);
console.log("title.id: ", title.id);
console.log("title.textContent: ", title.textContent);
console.log("title.hidden: ", title.hidden);
console.log("title.autofocus: ", title.autofocus);

console.dir(title);

title.innerText = "Click me!"; //? 텍스트
title.style.color = "blue"; //? 스타일

//! 클식 시 텍스트 변경하기
function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "red";
}

title.addEventListener("click", handleTitleClick); //? 이벤트

//! 마우스 입장 시 색상 변경하기
function handleMouseEnter() {
  title.innerText = "Hello!";
}

title.addEventListener("mouseenter", handleMouseEnter); //? 이벤트

//! 마우스 이탈 시 색상 변경하기
function handleMouseLeave() {
  title.innerText = "Bye Bye!";
}

title.addEventListener("mouseleave", handleMouseLeave); //? 이벤트

//! resize 시 색상 변경하기
// function handleResize() {
//   document.body.style.backgroundColor = "#FF7E9D";
// }

// window.addEventListener("resize", handleResize);

//! 마우스 클릭 시 색상 변경하기
function handleMouseDown() {
  title.style.color = "orange";
}

window.addEventListener("mousedown", handleMouseDown);

//! 클릭 시 색상 변경하기
const content = document.querySelector("#content");

function handleClick() {
  if (content.style.color === "red") {
    content.style.color = "black";
  } else {
    content.style.color = "red";
  }
}

content.addEventListener("click", handleClick);

//! 클릭 시 색상 변경하기(CSS in JavaScript)
const h3 = document.querySelector("h3");

function handleClick2() {
  h3.classList.toggle("active2");
}

h3.addEventListener("click", handleClick2);

//! 브라우저 크기 조정 시 배경 변경하기
const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const body = document.body;
  const width = window.innerWidth;

  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1000 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.add(SMALL_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  }
}

window.addEventListener("resize", handleResize);
