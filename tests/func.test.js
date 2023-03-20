const helloUserName = require("../src/functions/helloUser");
const defaultParam = require("../src/functions/defaultParam");

describe("Function test", () => {
  test("hello username function", () => {
    expect(helloUserName("World")).toBe("Hello World!!");
  });

  test("default param", () => {
    expect(defaultParam("test")).toBe("test : default param");
  });

  test("if a strict undefined is also sent in place of default param, it considers default parameter", () => {
    expect(defaultParam("new", undefined)).toBe("new : default param");
  });

  test("some other value is sent for default parameter", () => {
    expect(defaultParam("Batman", "Christian Bale")).toBe(
      "Batman : Christian Bale"
    );
  });
});
