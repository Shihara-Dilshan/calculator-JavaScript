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
      if (operator == "") {
        operator += event.target.textContent;
        savedNumber = currentNumber;
        currentNumber += " " + operator;
        current.textContent = 0;
        previuos.style.color = "white";
        savedNumberWithOperator = currentNumber;
        calculateResult(operator);
        previuos.textContent = result + " " + operator;

        currentNumber = "";
        count = 0;
        operator = "";
      }
    });
  });

  //calcualate the results
  function calculateResult(InputOperator) {
    switch (InputOperator) {
      case "+":
        result += Number.parseInt(savedNumber);
        console.log(result);
        break;
      case "-":
        result -= Number.parseInt(savedNumber);
        console.log(result);
        break;
      case "*":
        result *= Number.parseInt(savedNumber);
        console.log(result);
        break;
      case "/":
        result /= Number.parseInt(savedNumber);
        console.log(result);
        break;
      default:
        break;
    }
  }
});
