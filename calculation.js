
// THIS STORES INPUTTED NUMBERS TO MAKE CALCULATIONS

window.total = 0;

window.operations = {
  addition: false,
  subtraction: false,
  multiplication: false,
  division: false,
  equals: false
};

window.calculate = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b
};

window.first = true; // add variable to account for the first number inputted
window.pending = false;
window.currentNum = 0;
// create a stored number variable. When hitting = multiple times, it will take the stored number and run that calculation against the total which is the number displayed on the screen
