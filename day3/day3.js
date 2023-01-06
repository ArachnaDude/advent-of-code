const diagnosticsArr = require("./diagnostics");

const powerConsumption = (arr) => {
  const powerObj = { gammaRate: 0, epsilonRate: 0 };

  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    const slicedStr = entry.slice(0);
  }

  return powerObj;
};

module.exports = powerConsumption;

//slice to chop down the string for each iteration?
// shouldn't use for loop for this
// epsilon is invert of gamma
