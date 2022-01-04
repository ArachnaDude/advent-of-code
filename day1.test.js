const depthCount = require("./day1");

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
