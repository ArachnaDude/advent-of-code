const depthArrNum = require("./depths.js");

slidingDepthCount = (arr) => {
  const depthObj = {
    depthIncrease: 0,
    depthDecrease: 0,
    slidingScaleArr: [],
  };

  for (let i = 0; i < arr.length; i++) {
    let slidingScale = arr[i] + arr[i + 1] + arr[i + 2];
    if (!isNaN(slidingScale)) {
      depthObj.slidingScaleArr.push(slidingScale);
    }
  }

  for (let j = 0; j < depthObj.slidingScaleArr.length; j++) {
    if (depthObj.slidingScaleArr[j] > depthObj.slidingScaleArr[j - 1]) {
      depthObj.depthIncrease++;
    }
  }

  return depthObj;
};

//meaningless comment

console.log(slidingDepthCount(depthArrNum).depthIncrease);

module.exports = slidingDepthCount;
