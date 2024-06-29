const calculateBtn = document.querySelectorAll("button");

const numCalculator = document.getElementById("calculation");

for (let i = 0; i < calculateBtn.length; i++) {
  calculateBtn[i].addEventListener("click", () => {
    const buttonValue = calculateBtn[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  numCalculator.value = "";
}

function calculateResult() {
  numCalculator.value = eval(numCalculator.value);
}

function appendValue(buttonValue) {
  numCalculator.value = numCalculator.value + buttonValue;
}