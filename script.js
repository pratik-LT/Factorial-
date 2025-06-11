function calculateFactorial() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);
  const resultDisplay = document.getElementById('result');

  if (isNaN(number) || number < 0) {
    resultDisplay.textContent = "Please enter a non-negative number.";
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  resultDisplay.textContent = `Factorial of ${number} is ${factorial}`;
}

function calculateFactorial() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);
  const resultDisplay = document.getElementById('result');

  if (isNaN(number) || number < 0) {
    resultDisplay.textContent = "Please enter a non-negative number.";
    return;
  }

  let factorial = BigInt(1);
  for (let i = 2; i <= number; i++) {
    factorial *= BigInt(i);
  }

  resultDisplay.textContent = `Factorial of ${number} is ${factorial.toString()}`;
}