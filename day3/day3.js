const diagnosticsArr = require("./diagnostics");

const powerConsumption = (arr) => {
  const powerObj = { gammaRate: 0, epsilonRate: 0 };

  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];
    console.log(entry, "<< array element");
    for (let j = 0; j < entry.length; j++) {
      console.log(entry[j], "<< string in entry");
    }
  }

  return powerObj;
};

module.exports = powerConsumption;

// gamma and epsilon should be arrays, then join.
// we don't need to coerce final resuult to numbers
// strings will work fine

// to calculate mode
