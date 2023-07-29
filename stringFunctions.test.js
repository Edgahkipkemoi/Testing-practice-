const { stringLength, reverseString } = require("./stringFunctions");

describe("stringLength function", () => {
  test("should return the correct length of the input string", () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("testing")).toBe(7);
  });

  test("should throw an error for strings with length less than 1", () => {
    expect(() => stringLength("")).toThrowError(
      "String length should be between 1 and 10 characters."
    );
  });

  test("should throw an error for strings with length greater than 10", () => {
    expect(() => stringLength("thisisaverylongstring")).toThrowError(
      "String length should be between 1 and 10 characters."
    );
  });

  test("should throw an error for non-string inputs", () => {
    expect(() => stringLength(123)).toThrowError("Input should be a string.");
  });
});

describe("reverseString function", () => {
  test("should return the reversed string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("testing")).toBe("gnitset");
  });

  test("should throw an error for non-string inputs", () => {
    expect(() => reverseString(123)).toThrowError("Input should be a string.");
  });
});
