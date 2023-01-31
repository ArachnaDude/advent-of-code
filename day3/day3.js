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
    const digitArr = arr.map((element) => element[i]);
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

const getMode = (array, index, bias) => {
  let biasCounter = 0;
  array.forEach((e) => {
    if (e[index] === bias) {
      biasCounter++;
    }
  });

  if (bias === "1") {
    return biasCounter >= array.length / 2 ? "1" : "0";
  } else {
    return biasCounter <= array.length / 2 ? "0" : "1";
  }
};

const filterArrays = (array, comparisonDigit, index) => {
  return array.filter((e) => {
    return e[index] === comparisonDigit;
  });
};

const getRating = (array, bias) => {
  let index = 0;

  while (array.length > 1) {
    // get mode of current index
    const mode = getMode(array, index, bias);
    // filter array using mode and current index
    array = filterArrays(array, mode, index);
    index++;
  }
  return array[0];
};

const lifeSupport = (arr) => {
  const oxygenRating = getRating(arr, "1");
  const scrubberRating = getRating(arr, "0");

  return parseInt(oxygenRating, 2) * parseInt(scrubberRating, 2);
};

console.log(lifeSupport(diagnosticsArr));

module.exports = {
  powerConsumption,
  lifeSupport,
  filterArrays,
  getMode,
  getRating,
};
