module.exports = class {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b !== 0) {
      return a / b;
    }
    return "Error";
  }
};
