const button = document.querySelector(".calc-buttons");
const screen = document.querySelector(".screen");
let inputOne = "0";
let inputTwo = "0";
let operation = "";

button.addEventListener("click", function (event) {
  const screenText = event.target.innerText;

  if (Number.isNaN(parseInt(screenText))) {
    parseOperation(screenText);
  } else {
    updateScreen(screenText);
  }
});

const parseOperation = (calcOperation) => {
  switch (calcOperation) {
    case "C":
      clear();
      break;
    case "←":
      backSpace();
      break;
    case "÷":
      updateOperations("divide");
      break;
    case "×":
      updateOperations("multiply");
      break;
    case "-":
      updateOperations("subtract");
      break;
    case "+":
      updateOperations("add");
      break;
    case "=":
      doMaths(inputOne, inputTwo, operation);
      break;
    default:
      console.log("Unknown operation");
  }
};

function updateOperations(op) {
  operation = op;
  inputTwo = inputOne;
  screen.innerText = 0;
}

const updateScreen = (screenText) => {
  console.log(screenText);
  if (screen.innerText === "0") {
    screen.innerText = screenText;
  } else {
    screen.innerText += screenText;
  }
  inputOne = screen.innerText;
};

const clear = () => {
  screen.innerText = "0";
  inputOne = "0";
  inputTwo = "0";
};

const backSpace = () => {
  screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1);
  if (screen.innerText.length === 0) {
    screen.innerText = "0";
  }
};

function doMaths(x, y, op) {
  if (op === "divide") {
    if (inputOne === "0") {
      screen.innerText = "Zero Divsion. Press C.";
    } else {
      screen.innerText = parseInt(y) / parseInt(x);
    }
  }

  if (op === "multiply") {
    screen.innerText = parseInt(y) * parseInt(x);
  }

  if (op === "subtract") {
    screen.innerText = parseInt(y) - parseInt(x);
  }

  if (op === "add") {
    screen.innerText = parseInt(y) + parseInt(x);
  }

  inputOne = screen.innerText;
}
