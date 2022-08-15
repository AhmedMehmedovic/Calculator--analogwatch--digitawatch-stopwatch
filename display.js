Number.prototype.countDecimals = function () {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0;
};

class Display {
  elements = [];
  #isFloat = false;

  constructor(...rows) {
    rows?.forEach((row) => {
      this.elements.push(row);
    });

    this.elements[0].value = "0";
  }

  clear(rowIndex = 0) {
    this.elements[rowIndex].value = this.elements[rowIndex].value.slice(0, -1);
    if (this.elements[0].value === "") this.elements[0].value = "0";
  }

  clearAll() {
    for (const element of this.elements) {
      element.value = "";
    }
    this.elements[0].value = "0";
  }

  addData(data, row = 0) {
    if (this.elements[0].value === "0") this.elements[0].value = "";
    this.elements[row].value = this.#numberFormat(data, Number(data).countDecimals());
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {BigInt} index
   */
  addRow(element, index = undefined) {
    if (typeof index !== "undefined") {
      this.elements[index] = element;
    } else {
      this.elements.push(element);
    }
  }

  #numberFormat(number, decimals = 0, dec_point = ".", thousands_sep = ",") {
    // Strip all characters but numerical ones.
    number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return "" + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
}
