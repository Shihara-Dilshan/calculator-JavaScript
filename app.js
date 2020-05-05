document.addEventListener("DOMContentLoaded", () => {
  const AC = document.getElementById("data-all-clear");
  const DEL = document.getElementById("data-delete");
  const data_oparation = document.querySelectorAll(".data-operation");
  const data_number = document.querySelectorAll(".data-number");
  const equals = document.getElementById("data-equals");
  const previuos = document.querySelector(".previous");
  const current = document.querySelector(".new");
  let currentNumber = "";
  let count = 0;
  let operator = "";
  let savedNumberWithOperator = "";
  let savedNumber = "";
  let result = 0;
  let savedOperator = "";

  data_number.forEach((number) => {
    number.addEventListener("click", (event) => {
      current.style.color = "white";
      count++;
      if (count <= 9 && operator == "") {
        currentNumber += event.target.textContent;
        current.textContent = Number(currentNumber).toLocaleString();
      } else {
      }
    });
  });

  data_oparation.forEach((dataOprator) => {
    dataOprator.addEventListener("click", (event) => {
      if (operator === "") {
        operator += event.target.textContent;
        savedNumber = currentNumber;
        savedOperator = operator;
        currentNumber += " " + operator;
        current.textContent = 0;
        previuos.style.color = "white";
        savedNumberWithOperator = currentNumber;
        calculateResult(operator);
        previuos.textContent = negativeHandle(result) + " " + operator;

        currentNumber = "";
        count = 0;
        operator = "";
        current.style.color = "transparent";
      }
    });
  });

  //calcualate the results
  function calculateResult(InputOperator) {
    switch (InputOperator) {
      case "+":
        result += Number.parseFloat(savedNumber);

        break;
      case "-":
        if (result == 0) {
          result = Number.parseFloat(savedNumber);
        } else {
          result -= Number.parseFloat(savedNumber);
        }
        break;

      case "*":
        if (result == 0) {
          result = Number.parseFloat(savedNumber);
        } else {
          result *= Number.parseFloat(savedNumber);
        }
        break;

      case "/":
        if (result == 0) {
          result = Number.parseFloat(savedNumber);
        } else {
          result /= Number.parseFloat(savedNumber);
        }
        break;

      default:
        break;
    }
  }

  equals.addEventListener("click", () => {
    if (savedOperator != "") {
      savedNumber = currentNumber;

      current.textContent = 0;
      previuos.style.color = "white";

      calculateResult(savedOperator);
      previuos.textContent = result;

      currentNumber = "";
      count = 0;
      operator = "";
      savedOperator = "";
      current.style.color = "transparent";
    } else {
    }
  });

  //handle negative values
  function negativeHandle(number) {
    if (number < 0) {
      return `(${number})`;
    } else {
      return number;
    }
  }

  //All Clear
  AC.addEventListener("click", () => {
    currentNumber = "";
    count = 0;
    operator = "";
    savedNumberWithOperator = "";
    savedNumber = "";
    result = 0;
    savedOperator = "";
    previuos.textContent = ".";
    current.textContent = ".";
    previuos.style.color = "transparent";
    current.style.color = "transparent";
  });
});
