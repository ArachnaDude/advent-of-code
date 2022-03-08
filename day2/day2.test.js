const { directionFinder, directionFinderWithAim } = require("./day2");

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
  test("when passed an array of direction arrays, [0] selects relevant property, [1] changes value", () => {
    const testArr = [
      ["forward", 1],
      ["down", 2],
    ];
    const functionCall = directionFinder(testArr);
    expect(functionCall.horizontalPosition).toBe(1);
    expect(functionCall.depth).toBe(2);
  });
  test("'down' increases depth value, 'up' decreases depth value", () => {
    const testArr = [
      ["down", 2],
      ["up", 1],
      ["down", 2],
      ["up", 1],
    ];
    const functionCall = directionFinder(testArr);
    expect(functionCall.depth).toBe(2);
  });
  test("multValue property is final horizontal position and depth multiplied", () => {
    const testArr = [
      ["forward", 2],
      ["down", 3],
      ["up", 2],
      ["forward", 2],
      ["down", 4],
    ];
    const functionCall = directionFinder(testArr);
    expect(functionCall.multValue).toBe(20);
  });
});

describe.only("directionFinderWithAim", () => {
  test("when passed an array of direction arrays, returns an object", () => {
    const testArr = [
      ["forward", 1],
      ["down", 1],
    ];
    const functionCall = directionFinderWithAim(testArr);
    const type = typeof functionCall;
    expect(type).toBe("object");
  });
  test("returned object has properties of horizontalPosition, depth and aim", () => {
    const testArr = [
      ["forward", 1],
      ["down", 1],
    ];
    const functionCall = directionFinderWithAim(testArr);
    expect(functionCall).toHaveProperty("horizontalPosition");
    expect(functionCall).toHaveProperty("depth");
    expect(functionCall).toHaveProperty("aim");
  });
  test("'down' increases aim, 'up' decreases aim", () => {
    const testArr = [
      ["down", 2],
      ["down", 2],
      ["up", 1],
    ];
    const functionCall = directionFinderWithAim(testArr);
    expect(functionCall.aim).toBe(3);
  });
  test("'forward' increases horizontalPosition by number specified, and increases depth by aim * number specified", () => {
    const testArr = [
      ["down", 2],
      ["forward", 5],
    ];
    const functionCall = directionFinderWithAim(testArr);
    expect(functionCall.aim).toBe(2);
    expect(functionCall.horizontalPosition).toBe(5);
    expect(functionCall.depth).toBe(10);
  });
  test("'forward' works with both 'down' and 'up' values, in multiple steps", () => {
    const testArr = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2],
    ];
    const functionCall = directionFinderWithAim(testArr);
    expect(functionCall.horizontalPosition).toBe(15);
    expect(functionCall.depth).toBe(60);
  });
  test("returned object has a property of multValue, value of which is horizontalPosition * depth", () => {
    const testArr = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2],
    ];
    const functionCall = directionFinderWithAim(testArr);
    expect(functionCall.horizontalPosition).toBe(15);
    expect(functionCall.depth).toBe(60);
    expect(functionCall.multValue).toBe(900);
  });
});
