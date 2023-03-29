const maxNumElement = document.querySelector("#max-number");
const guessNumElement = document.querySelector("#guess-number");

const submitBtn = document.querySelector("#submit-btn");

const machine = document.querySelector("#machine");

const resultWin = document.querySelector("#result-win");
const resultLose = document.querySelector("#result-lose");

function toggleResult(event) {
  event.preventDefault();

  if (maxNumElement.value === "" || guessNumElement.value === "") {
    alert("Input another Number!");
    return;
  }

  const maxNum = parseInt(maxNumElement.value);
  const guessNum = parseInt(guessNumElement.value);

  if (maxNum < 0 || guessNum < 0 || guessNum > maxNum) {
    alert("Chose another Number!");
    return;
  }

  const machineNum = Math.ceil(Math.random() * maxNum);

  machine.innerText = `You chose: ${guessNum}, the machine chose: ${machineNum}.`;
  if (guessNum === machineNum) {
    resultWin.innerText = "You won!";
    resultWin.classList.remove("hidden");
    resultLose.classList.add("hidden");
  } else {
    resultLose.innerText = "You lost!";
  }
}

submitBtn.addEventListener("click", toggleResult);
