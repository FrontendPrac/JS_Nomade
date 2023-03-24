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

function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "red";
}

//! 클식 시 텍스트 변경하기
title.addEventListener("click", handleTitleClick); //? 이벤트

function handleMouseEnter() {
  title.innerText = "Hello!";
}

//! 마우스 입장 시 색상 변경하기
title.addEventListener("mouseenter", handleMouseEnter); //? 이벤트

function handleMouseLeave() {
  title.innerText = "Bye Bye!";
}

//! 마우스 이탈 시 색상 변경하기
title.addEventListener("mouseleave", handleMouseLeave); //? 이벤트

function handleResize() {
  document.body.style.backgroundColor = "#FF7E9D";
}

//! resize 시 색상 변경하기
window.addEventListener("resize", handleResize);

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
