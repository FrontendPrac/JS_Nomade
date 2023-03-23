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

title.addEventListener("click", handleTitleClick); //? 이벤트

function handleMouseEnter() {
  title.innerText = "Hello!";
}

title.addEventListener("mouseenter", handleMouseEnter); //? 이벤트

function handleMouseLeave() {
  title.innerText = "Bye Bye!";
}

title.addEventListener("mouseleave", handleMouseLeave); //? 이벤트

function handleResize() {
  document.body.style.backgroundColor = "#FF7E9D";
}

window.addEventListener("resize", handleResize);

function handleMouseDown() {
  title.style.color = "orange";
}

window.addEventListener("mousedown", handleMouseDown);
