const diagnosticsArr = require("./diagnostics");

const powerConsumption = (arr) => {
  const powerObj = {
    gammaRate: 0,
    epsilonRate: 0,
    powerUsage: 0,
  };

  const modeArray = [];
  const antiModeArray = [];
  const strLength = arr[0].length;
  for (let i = 0; i < strLength; i++) {
    let digitArr = arr.map((element) => element[i]);
    const getMode = (array) => {
      let zeroCount = 0;
      let oneCount = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === "0") {
          zeroCount++;
        } else {
          oneCount++;
        }
      }
      return zeroCount > oneCount ? 0 : 1;
    };
    const antiMode = (num) => {
      return num === 0 ? 1 : 0;
    };

    modeArray.push(getMode(digitArr));
    antiModeArray.push(antiMode(getMode(digitArr)));
  }
  powerObj.gammaRate = parseInt(modeArray.join(""), 2);
  powerObj.epsilonRate = parseInt(antiModeArray.join(""), 2);
  powerObj.powerUsage = powerObj.gammaRate * powerObj.epsilonRate;

  console.log(powerObj);
  return powerObj;
};

const lifeSupport = (arr) => {
  const powerObj = {
    "O2 rate": 0,
    "CO2 scrubber rate": 0,
    lifeSupportRating: 0,
    modeArrayCopy: [...arr],
    antiModeArrayCopy: [...arr],
  };

  const strLength = arr[0].length;

  for (let i = 0; i < strLength; i++) {
    console.log(powerObj.modeArrayCopy, "modeArrayCopy before loop");
    // provides an array of all values at position i
    let digitArr = powerObj.modeArrayCopy.map((element) => element[i]);
    console.log(digitArr, "array of digits at position", i);
    let copiedArr = [...digitArr];
    const getMode = (array) => {
      let zeroCount = 0;
      let oneCount = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === "0") zeroCount++;
        else oneCount++;
      }
      return zeroCount > oneCount ? "0" : "1";
    };
    let modeOfNthDigit = getMode(copiedArr);
    console.log(modeOfNthDigit, "mode of element", i);
    const filteredArray = powerObj.modeArrayCopy.filter((digit) => {
      console.log(digit, "digit");
      return digit[i] === modeOfNthDigit;
    });
    console.log(filteredArray, "filteredArray");
    powerObj.modeArrayCopy = filteredArray;
  }

  return powerObj;
};

module.exports = { powerConsumption, lifeSupport };

//loop through first digit of each element.
//calculate mode of first digit
// if first digit != mode, delete it
