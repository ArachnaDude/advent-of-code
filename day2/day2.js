const formattedDirections = require("./directions");

directionFinder = (arr) => {
  const directionObject = {
    horizontalPosition: 0,
    depth: 0,
    multValue: 0,
  };

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

//console.log(directionFinder(formattedDirections));

directionFinderWithAim = (arr) => {
  const directionObject = {
    horizontalPosition: 0,
    depth: 0,
    aim: 0,
    multValue: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0];
    let increment = arr[i][1];

    switch (direction) {
      case "down":
        directionObject.aim += increment;
        break;
      case "up":
        directionObject.aim -= increment;
        break;
      case "forward":
        directionObject.horizontalPosition += increment;
        directionObject.depth += directionObject.aim * increment;
        break;
    }
  }
  directionObject.multValue =
    directionObject.horizontalPosition * directionObject.depth;

  return directionObject;
};

console.log(directionFinderWithAim(formattedDirections));

module.exports = { directionFinder, directionFinderWithAim };
