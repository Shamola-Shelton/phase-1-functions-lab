// Code your solution in this file!
const scuberHeadquarters = 42;

function distanceFromHqInBlocks(pickUpLocation) {
  const numberOfBlocks = Math.abs(pickUpLocation - scuberHeadquarters);
  return numberOfBlocks;
}

function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const numberOfFeetTravelled = Math.abs(destinationBlock - startBlock) * 264;
  return numberOfFeetTravelled;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}