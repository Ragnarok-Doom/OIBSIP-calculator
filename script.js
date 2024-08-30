// script.js
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');
let input = '';
const MAX_INPUT_LENGTH = 60; // Set a maximum length for the input

document.addEventListener('keydown', (event) => {
  const { key } = event;

  if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '(' || key === ')') {
    handleClick(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    handleBackspace();
  }
});

function handleClick(value) {
  if (input.length < MAX_INPUT_LENGTH) {
    if (value === 'π') {
      value = Math.PI;
    }
    input += value;
    inputElement.textContent = input;
    adjustFontSize();
  } else {
    // Optional: Show a message or visual cue when the max length is exceeded
    inputElement.textContent = 'Max length reached';
  }
}

function calculateResult() {
  try {
    // Replace π with Math.PI
    let evaluatedInput = input.replace(/π/g, Math.PI);

    // Replace function names with JavaScript Math functions
    evaluatedInput = evaluatedInput.replace(/sin\(/g, 'Math.sin(');
    evaluatedInput = evaluatedInput.replace(/cos\(/g, 'Math.cos(');
    evaluatedInput = evaluatedInput.replace(/tan\(/g, 'Math.tan(');
    evaluatedInput = evaluatedInput.replace(/log\(/g, 'Math.log(');
    evaluatedInput = evaluatedInput.replace(/sqrt\(/g, 'Math.sqrt(');

    resultElement.textContent = eval(evaluatedInput);
  } catch (error) {
    resultElement.textContent = 'Error';
  }
  adjustFontSize();
}

function handleClear() {
  input = '';
  inputElement.textContent = input;
  resultElement.textContent = '';
  adjustFontSize();
}

function handleBackspace() {
  input = input.slice(0, -1);
  inputElement.textContent = input;
  adjustFontSize();
}

