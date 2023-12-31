function stringLength(string) {
    if (typeof string !== "string") {
      throw new Error("Input should be a string.");
    }
  
    const length = string.length;
  
    if (length < 1 || length > 10) {
      throw new Error("String length should be between 1 and 10 characters.");
    }
  
    return length;
  }
  
  function reverseString(string) {
    if (typeof string !== "string") {
      throw new Error("Input should be a string.");
    }
  
    return string.split("").reverse().join("");
  }
  
  module.exports = {
    stringLength,
    reverseString,
  };
  