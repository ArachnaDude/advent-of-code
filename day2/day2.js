const formattedDirections = require("./directions");

directionFinder = (arr) => {
  const directionObject = {
    horizontalPosition: 0,
    depth: 0,
  };
  console.log(directionObject, "pre for loop");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "forward") {
      directionObject.horizontalPosition += arr[i][1];
    }
    if (arr[i][0] === "down") {
      directionObject.depth += arr[i][1];
    }
  }
  console.log(directionObject, "post for loop");
  return directionObject;
};

module.exports = directionFinder;
