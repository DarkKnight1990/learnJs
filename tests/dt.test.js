const dtModule = require("../src/dataTypes/dt");

describe("Data Types Test", () => {
  test("convert null to Number should be 0", () => {
    expect(dtModule.convertToNumber(null)).toBe(0);
  });

  test("convert undefined to Number should be NaN", () => {
    expect(dtModule.convertToNumber(undefined)).toBe(NaN);
  });

  test("coverting a text string to number will return NaN", () => {
    expect(dtModule.convertToNumber("abc123")).toBe(NaN);
  });

  test("coverting a number which is trung returns the number", () => {
    expect(dtModule.convertToNumber("123")).toBe(123);
  });

  test("convert '0' to boolean return True", () => {
    expect(dtModule.convertToBoolean("0")).toBe(true);
  });

  test("convert 0 to boolean return True", () => {
    expect(dtModule.convertToBoolean(0)).toBe(false);
  });
});
