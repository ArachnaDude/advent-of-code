const depthCount = require("./day1");
const slidingDepthCount = require("./day1-part2");

describe("depthCount", () => {
  test("when passed an array of numbers, returns an object", () => {
    const type = typeof depthCount([]);
    expect(type).toBe("object");
  });
  test("when passed an array of increasing numbers, depthIncrease property increases to reflect number of increases in depth", () => {
    const arr = [1, 2, 3, 4];
    const count = depthCount(arr);
    expect(count.depthIncrease).toBe(3);
  });
  test("when passed an array of depths, depthIncrease ignores no changes in depth", () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 4];
    const count = depthCount(arr);
    expect(count.depthIncrease).toBe(3);
  });
  test("when passed an array of depths, depthIncrease ignores decreases in depth", () => {
    const arr = [1, 2, 1, 2, 3, 4];
    const count = depthCount(arr);
    expect(count.depthIncrease).toBe(4);
  });
  test("when passed an array of depths, depthDecreases property increases to reflect numbers of decreases in depth", () => {
    const arr = [4, 3, 2, 1];
    const count = depthCount(arr);
    expect(count.depthDecrease).toBe(3);
  });
});
describe("slidingDepthCount", () => {
  test("when passed an array of numbers, returns an object", () => {
    const testArr = [1, 2, 3];
    const functionCall = slidingDepthCount(testArr);
    const type = typeof functionCall;
    expect(type).toBe("object");
  });
  test("when passed an array of three numbers, adds the three numbers, and stores that number in an array", () => {
    const testArr = [1, 2, 3];
    const functionCall = slidingDepthCount(testArr);
    const resultArr = [6];
    expect(functionCall.slidingScaleArr).toEqual(resultArr);
  });
  test("Adds groups of three numbers, starting at index [0][1][2], then [1][2][3] etc, storing them in an array", () => {
    const testArr = [1, 2, 3, 4];
    const functionCall = slidingDepthCount(testArr);
    const resultArr = [6, 9];
    expect(functionCall.slidingScaleArr).toEqual(resultArr);
  });
  test("Works on arrays of large numbers", () => {
    const testArr = [4561, 2285, 6572, 1459, 8323];
    const functionCall = slidingDepthCount(testArr);
    const resultArr = [13418, 10316, 16354];
    expect(functionCall.slidingScaleArr).toEqual(resultArr);
  });
  test("Function increments depthIncrease every time an increase in depth is detected", () => {
    const testArr = [1, 2, 3, 4, 5];
    const functionCall = slidingDepthCount(testArr);
    const resultArr = [6, 9, 12];
    expect(functionCall.depthIncrease).toBe(2);
  });
  test("Function correctly ignores decreases/no changes in depth", () => {
    const testArr = [1, 1, 2, 1, 1, 1];
    const functionCall = slidingDepthCount(testArr);
    expect(functionCall.depthIncrease).toBe(0);
  });
});
