const { powerConsumption, lifeSupport } = require("./day3");

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

describe.only("lifeSupport", () => {
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
    const functionCall = lifeSupport(testArr);
    const type = typeof functionCall;
    expect(type).toBe("object");
  });
});
