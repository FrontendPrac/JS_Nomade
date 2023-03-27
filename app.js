//! 버튼을 클릭 시 입력값 받아오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USERNAME = "username";
const HIDDEN = "hidden";

function onSubmitHandler(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  loginForm.classList.add(HIDDEN);
  link.classList.remove(HIDDEN);
  loginInput.value = "";
}

//! 링크 클릭 시 페이지 이동 막기
const link = document.querySelector("a");

function onClickHandler(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME);
  loginForm.classList.remove(HIDDEN);
  link.classList.add(HIDDEN);
}

//! 로컬 스토리지 유무에 따라 토클링하기
const saveUsername = localStorage.getItem(USERNAME);
console.log(saveUsername);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onSubmitHandler);
} else {
  link.classList.remove(HIDDEN);
  link.addEventListener("click", onClickHandler);
}
