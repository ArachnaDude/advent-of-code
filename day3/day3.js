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
    oxygenRating: 0,
    scrubberRating: 0,
    lifeSupportRating: 0,
    modeArrayCopy: [...arr],
    antiModeArrayCopy: [...arr],
  };

  const strLength = arr[0].length;

  for (let i = 0; i < strLength; i++) {
    // provides an array of all values at position i
    let digitArr = powerObj.modeArrayCopy.map((element) => element[i]);

    // gets mode of values at position i. If 1s and 0s are equal, returns 1
    const getMode = (array) => {
      let zeroCount = 0;
      let oneCount = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === "0") zeroCount++;
        else oneCount++;
      }
      return oneCount >= zeroCount ? "1" : "0";
    };
    const getAntiMode = (num) => {
      return num === "0" ? "1" : "0";
    };
    let modeOfNthDigit = getMode(digitArr);
    let antiModeOfNthDigit = getAntiMode(modeOfNthDigit);

    // replaces respective powerObj arrays with filtered versions
    const filteredModeArray = powerObj.modeArrayCopy.filter((digit) => {
      return digit[i] === modeOfNthDigit;
    });
    const filteredAntiModeArray = powerObj.antiModeArrayCopy.filter((digit) => {
      return digit[i] === antiModeOfNthDigit;
    });

    // prevents loop from erasing final correct value
    if (powerObj.modeArrayCopy.length !== 1) {
      powerObj.modeArrayCopy = filteredModeArray;
    }
    if (powerObj.antiModeArrayCopy.length !== 1) {
      powerObj.antiModeArrayCopy = filteredAntiModeArray;
    }
  }

  powerObj.oxygenRating = parseInt(powerObj.modeArrayCopy[0], 2);
  powerObj.scrubberRating = parseInt(powerObj.antiModeArrayCopy[0], 2);
  powerObj.lifeSupportRating = powerObj.oxygenRating * powerObj.scrubberRating;

  return powerObj;
};

module.exports = { powerConsumption, lifeSupport };
