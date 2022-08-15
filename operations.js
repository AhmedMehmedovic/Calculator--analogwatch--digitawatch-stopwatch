class Operations {
  number1 = null;
  number2 = null;

  do(operation) {
    let result = undefined;
    switch (operation) {
      case "+":
        result = this.number1 + this.number2;
        break;
      case "-":
        result = this.number1 - this.number2;
        break;
      case "*":
        result = this.number1 * this.number2;
        break;
      case "/":
        result = this.number1 / this.number2;
        break;
      case "%":
        result = this.number1 / this.number2;
        break;

      default:
        break;

        return result;
    }
  }
}
