let display = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) =>
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+":
        if (display.innerText) {
          display.innerText += e.target.innerText;
          break;
        }
      case "-":
        if (display.innerText) {
          display.innerText += e.target.innerText;
          break;
        }
      case "/":
        if (display.innerText) {
          display.innerText += e.target.innerText;
          break;
        }
      case "*":
        if (display.innerText) {
          display.innerText += e.target.innerText;
          break;
        }
        break;
      case "=":
        if (display.innerText.includes("+")) {
          const values = display.innerText.split("+");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue + secondValue;
          display.innerText = result;
          break;
        } else if (display.innerText.includes("-")) {
          const values = display.innerText.split("-");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = (firstValue - secondValue).toFixed();
          display.innerText = result;
          break;
        } else if (display.innerText.includes("/")) {
          const values = display.innerText.split("/");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue / secondValue;
          display.innerText = result;
          break;
        } else if (display.innerText.includes("*")) {
          const values = display.innerText.split("*");
          const firstValue = parseFloat(values[0]);
          const secondValue = parseFloat(values[1]);
          const result = firstValue * secondValue;
          display.innerText = result;
          break;
        }
      default:
        display.innerText += e.target.innerText;
    }
  })
);
