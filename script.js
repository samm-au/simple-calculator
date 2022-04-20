let display = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));

let equation = "";

buttons.map((button) =>
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "0":
        if (display.innerText.includes(".")) {
          display.innerText += e.target.innerText;
          equation += e.target.innerText;
          display.innerText = equation;
        }
        break;

      case "C":
        display.innerText = "";
        equation = "";
        break;
      case ".":
        if (!display.innerText.includes(".")) {
          display.innerText += ".";
          equation += ".";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
          equation = equation.slice(0, -1);
        }
        break;
      case "+":
        if (display.innerText) {
          equation += e.target.innerText;
          display.innerText = e.target.innerText;
          break;
        }
      case "-":
        if (display.innerText) {
          equation += e.target.innerText;
          display.innerText = e.target.innerText;
          break;
        }
      case "/":
        if (display.innerText) {
          equation += e.target.innerText;
          display.innerText = e.target.innerText;
          break;
        }
      case "*":
        if (display.innerText) {
          equation += e.target.innerText;
          display.innerText = e.target.innerText;
          break;
        }
        break;
      case "=":
        if (equation.includes("+")) {
          const values = equation.split("+");
          console.log(values);
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue + secondValue;
          if (result.toString().length > 9) {
            display.innerText = result.toPrecision(8);
          } else {
            display.innerText = result;
          }
          break;
        } else if (equation.includes("-")) {
          const values = equation.split("-");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue - secondValue;
          if (result.toString().length > 9) {
            display.innerText = result.toPrecision(8);
          } else {
            display.innerText = result;
          }
          break;
        } else if (equation.includes("/")) {
          const values = equation.split("/");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue / secondValue;
          if (result.toString().length > 9) {
            display.innerText = result.toPrecision(8);
          } else {
            display.innerText = result;
          }
          break;
        } else if (equation.includes("*")) {
          const values = equation.split("*");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue * secondValue;
          if (result.toString().length > 9) {
            display.innerText = result.toPrecision(8);
          } else {
            display.innerText = result;
          }
          break;
        } else {
          display.innerText = equation;
          break;
        }
      default:
        if (display.innerText.length < 10) {
          equation += e.target.innerText;
          display.innerText += e.target.innerText;
        } else {
          alert("You've reached the limit of integers!");
        }
    }
  })
);
