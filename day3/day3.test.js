const {
  powerConsumption,
  lifeSupport,
  filterArrays,
  getMode,
  getRating,
} = require("./day3");

describe("powerConsumption", () => {
  test("when passed an array, function returns an object", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = powerConsumption(testArr);
    const type = typeof functionCall;
    expect(type).toBe("object");
  });
  test("returned object has properties 'gamma rate' and 'epsilon rate'", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall).toHaveProperty("gammaRate");
    expect(functionCall).toHaveProperty("epsilonRate");
  });
  test("assigns decimal converted mode of array of 1 digit elements to gammaRate", () => {
    const testArr = [
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall.gammaRate).toBe(1);
  });
  test("assigns decimal conveted mode of array of 2 digit elements to gammaRate", () => {
    const testArr = [
      "00",
      "11",
      "10",
      "10",
      "10",
      "01",
      "00",
      "11",
      "10",
      "11",
      "00",
      "01",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall.gammaRate).toBe(2);
  });
  test("assigns decimal converted mode of array of 5 digit elements to gammaRate", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall.gammaRate).toBe(22);
  });
  test("assigns decimal converted anti-mode of 5 digit elements to epsilonRate", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall.epsilonRate).toBe(9);
  });
  test("calculates power usage by multiplying decimal converted gamma and epsilon rates", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = powerConsumption(testArr);
    expect(functionCall.gammaRate).toBe(22);
    expect(functionCall.epsilonRate).toBe(9);
    expect(functionCall.powerUsage).toBe(198);
  });
});

describe("lifeSupport", () => {
  test("calculates mode of one digit array of values, and removes non-modal values", () => {
    const testArr = [
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
    ];
    const modeArr = ["1", "1", "1", "1", "1", "1", "1"];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.modeArrayCopy).toEqual(modeArr);
  });
  test("calculates mode of two digit array of values, and removes non-modal values", () => {
    const testArr = [
      "00",
      "11",
      "10",
      "10",
      "10",
      "01",
      "00",
      "11",
      "10",
      "11",
      "00",
      "01",
    ];
    const modeArr = ["10", "10", "10", "10"];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.modeArrayCopy).toEqual(modeArr);
  });
  test("calculates mode of five digit array of values, removing non-modal values", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const modeArr = ["10111"];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.modeArrayCopy).toEqual(modeArr);
  });

  test("calculates anti-mode of one digit array of values, and removes modal values", () => {
    const testArr = [
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
    ];
    const antiModeArr = ["0", "0", "0", "0", "0"];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.antiModeArrayCopy).toEqual(antiModeArr);
  });
  test("calculates anti-mode of five digit array of values, and removes modal values", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const antiModeArr = ["01010"];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.antiModeArrayCopy).toEqual(antiModeArr);
  });
  test("correctly converts oxygen rating from binary to decimal, and multiplies result to get life support rating", () => {
    const testArr = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const functionCall = lifeSupport(testArr);
    expect(functionCall.oxygenRating).toBe(23);
    expect(functionCall.scrubberRating).toBe(10);
    expect(functionCall.lifeSupportRating).toBe(230);
  });
});

const singleDigitTestArr = ["0", "0", "1"];
const doubleDigitTestArr = ["01", "00", "10"];
const tripleDigitTestArr = ["011", "001", "101"];
describe("filterArrays", () => {
  test("filters a list of strings", () => {
    const newArray = filterArrays(singleDigitTestArr, "1", 0);
    expect(newArray).toMatchObject(["1"]);
  });
  test("filters a list of strings", () => {
    const newArray = filterArrays(singleDigitTestArr, "0", 0);
    expect(newArray).toMatchObject(["0", "0"]);
  });
  test("filters an array of 2-character strings", () => {
    const newArray = filterArrays(doubleDigitTestArr, "1", 1);
    expect(newArray).toMatchObject(["01"]);
  });
});

describe.only("getMode", () => {
  test("Returns mode of array", () => {
    const mode = getMode(singleDigitTestArr, 0, "0");
    expect(mode).toBe("1");
  });

  test("Returns mode of array", () => {
    const mode = getMode(tripleDigitTestArr, 2, "1");
    expect(mode).toBe("1");
  });
  test("Returns mode of array", () => {
    const mode = getMode(
      ["00100", "11010", "10110", "10111", "10101", "01111"],
      2,
      "0"
    );
    expect(mode).toBe("0");
  });
});

describe.only("getRating", () => {
  const testArr = ["00100", "11110", "10110", "10111", "10101", "01111"];
  test("returns an element", () => {
    expect(getRating(testArr, "1")).toBe("10111");
    expect(getRating(testArr, "0")).toBe("00100");
  });
});
