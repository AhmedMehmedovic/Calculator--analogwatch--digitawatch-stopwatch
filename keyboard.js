class KeyBoard {
  constructor() {
    this.#bindKey();
  }

  #bindKey() {
    document.querySelector("body").addEventListener("keydown", function (e) {
      const element = document.querySelector('[data-key="' + e.key + '"]');

      if (e.code.startsWith("Numpad") || e.code === e.key) {
        if (element) {
          element.click();
        }
      }
    });
  }

  keyboardPress(display, operations) {
    document.querySelector("body").addEventListener("click", function (e) {
      const key = e.target.dataset?.key;
      const keyType =
        key == parseInt(key) || [","].includes(key) ? "number" : ["%", "PageDown", "End", "k", "/", "*", "+", "-"].includes(key) ? "operation" : "function";

      console.log(keyType);

      switch (key) {
        case "Backspace":
          display.clear();
          break;
        case "Delete":
          display.clearAll();
          break;

        default:
          if (key) {
            display.addData(key);
            if (keyType === "operation") {
              //operations.number1 = display.values[0];
              console.log(operations);
            }
          }
          break;
      }
    });
  }
}
