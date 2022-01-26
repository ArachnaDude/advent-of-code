const depthArrNum = require("./depths.js");

function depthCount(arr) {
  const depthObj = {
    depthIncrease: 0,
    depthDecrease: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      depthObj.depthIncrease++;
    }
    if (arr[i] < arr[i - 1]) {
      depthObj.depthDecrease++;
    }
  }
  return depthObj;
}

console.log(depthCount(depthArrNum));

module.exports = depthCount;
