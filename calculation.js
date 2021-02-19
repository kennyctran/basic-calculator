
// THIS STORES INPUTTED NUMBERS TO MAKE CALCULATIONS

window.total = 0;

window.operations = {
  addition: false,
  subtraction: false,
  multiplication: false,
  division: false
};

window.calculate = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b
};

window.pending = false;

