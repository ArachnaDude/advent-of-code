const directionFinder = require("./day2");

describe("directionFinder", () => {
  test("when passed an array of direction arrays, returns an object", () => {
    const testArr = [
      ["forward", 1],
      ["down", 1],
    ];
    const functionCall = directionFinder(testArr);
    const type = typeof functionCall;
    expect(type).toBe("object");
  });
  test("returned object has properties of 'horizontalPositon', and 'depth", () => {
    const testArr = [
      ["forward", 1],
      ["down", 1],
    ];
    const functionCall = directionFinder(testArr);
    expect(functionCall).toHaveProperty("horizontalPosition");
    expect(functionCall).toHaveProperty("depth");
  });
  test.only("when passed an array of direction arrays, [0] selects relevant property, [1] changes value", () => {
    const testArr = [
      ["forward", 1],
      ["down", 2],
    ];
    const functionCall = directionFinder(testArr);
    expect(functionCall.horizontalPosition).toBe(1);
    expect(functionCall.depth).toBe(2);
  });
});
