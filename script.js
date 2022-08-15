class Calculator {
  display = new Display(document.getElementById("currentInput"), document.getElementById("previousInput"));
  operations = new Operations();
  keyboard = new KeyBoard();

  constructor() {
    this.keyboard.keyboardPress(this.display, this.operations);
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  const calculator = new Calculator();
});
