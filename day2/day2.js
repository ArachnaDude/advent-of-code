const formattedDirections = require("./directions");

directionFinder = (arr) => {
  const directionObject = {
    horizontalPosition: 0,
    depth: 0,
    multValue: 0,
  };
  console.log(directionObject, "pre for loop");
  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let increment = arr[i][1];

    switch (direction) {
      case "forward":
        directionObject.horizontalPosition += increment;
        break;
      case "up":
        directionObject.depth -= increment;
        break;
      case "down":
        directionObject.depth += increment;
        break;
    }
  }

  directionObject.multValue =
    directionObject.horizontalPosition * directionObject.depth;

  return directionObject;
};

console.log(directionFinder(formattedDirections));

module.exports = directionFinder;
