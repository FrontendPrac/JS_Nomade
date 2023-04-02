const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// 투두 리스트 배열
const todos = [];

// 투두 리스트 저장 함수
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 투두 삭제 함수
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 투두 페인팅 함수
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

// 서브밋 함수
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((item) => console.log("this is the turn of", item));
}
