const diagnosticsArr = require("./diagnostics");

const powerConsumption = (arr) => {
  const powerObj = { gammaRate: 0, epsilonRate: 0 };

  const modeArray = [];
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
    console.log(digitArr, `array of digits at position ${i}`);
    console.log(getMode(digitArr), `mode of digits at position ${i}`);
    modeArray.push(getMode(digitArr));
  }
  powerObj.gammaRate = parseInt(modeArray.join(""), 2);

  return powerObj;
};

module.exports = powerConsumption;

//
