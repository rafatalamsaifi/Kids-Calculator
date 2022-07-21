let result = document.getElementById("newnum");
function refreshValues() {
  a = document.getElementById("num1").valueAsNumber;
  b = document.getElementById("num2").valueAsNumber;
}
function sum() {
  let c = a + b;
  result.innerHTML = c;
  document.getElementById("thnk").innerHTML = "Thank you Buddy! &#128522;";
}

function subtract() {
  // let a = document.getElementById("num1").valueAsNumber;
  // let b = document.getElementById("num2").valueAsNumber;
  let c = a - b;
  result.innerHTML = c;
  document.getElementById("thnk").innerHTML = "you are Genius! &#128517;";
}

function multiply() {
  // let a = document.getElementById("num1").valueAsNumber;
  // let b = document.getElementById("num2").valueAsNumber;
  let c = a * b;
  result.innerHTML = c;
  document.getElementById("thnk").innerHTML = "Weldone! &#128523";
}

function divide() {
  // let a = document.getElementById("num1").valueAsNumber;
  // let b = document.getElementById("num2").valueAsNumber;
  let c = a / b;
  c = c.toFixed(2);
  result.innerHTML = c;
  document.getElementById("thnk").innerHTML = "Perfect! &#128527;";
}
