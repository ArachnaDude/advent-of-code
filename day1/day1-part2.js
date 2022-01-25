const depthArrNum = require("./depths.js");

exports.slidingDepthCount = (arr) => {
  console.log("function begins");

  const depthObj = {
    depthIncrease: 0,
    depthDecrease: 0,
  };

  const slidingScaleArr = [];

  for (let i = 0; i < arr.length; i++) {
    let slidingScale = arr[i] + arr[i + 1] + arr[i + 2];
    if (!isNaN(slidingScale)) {
      slidingScaleArr.push(slidingScale);
    } else {
      console.log("not a number, homeboy");
    }
  }
  return slidingScaleArr[0];
};
