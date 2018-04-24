const fs = require('fs');

// Part 1

let currentPosition = [0,0];
let visitedHouses = [[0,0]];

const data = fs.readFileSync('./puzzleinput.txt');
const text = data.toString();
const instructions = text.split('');

const getVisitedHouses = (instructions, currentPosition, visitedHouses) => {
  instructions.forEach((direction) => {
    if (direction === '>') {
      currentPosition[0]++;
    } else if (direction === '<') {
      currentPosition[0]--;
    } else if (direction === '^') {
      currentPosition[1]++;
    } else if (direction === 'v') {
      currentPosition[1]--;
    }
    visitedHouses.push([currentPosition[0], currentPosition[1]]);

  });

  const visitedHousesAsStrings = visitedHouses.map((house) => {
    return house.toString();
  });

  return visitedHousesAsStrings;

};

const visitedHousesAsStrings = getVisitedHouses(instructions, currentPosition, visitedHouses);
const uniqueVisitedHouses = Array.from(new Set(visitedHousesAsStrings));
const numUniqueHouses = uniqueVisitedHouses.length;

console.log(`Part 1: ${numUniqueHouses} houses receive at least one present.`);

// Part 2

let santaCurrentPosition = [0,0];
let roboCurrentPosition = [0,0];
let santaVisitedHouses = [[0,0]];
let roboVisitedHouses = [[0,0]];
const santaInstructions = [];
const roboInstructions = [];

instructions.forEach((instruction, index) => {
  if(index%2 === 0) {
    santaInstructions.push(instruction);
  } else {
    roboInstructions.push(instruction);
  }
});

const santaVisitedHousesAsStrings = getVisitedHouses(santaInstructions, santaCurrentPosition, santaVisitedHouses);

const roboVisitedHousesAsStrings = getVisitedHouses(roboInstructions, roboCurrentPosition, roboVisitedHouses);

const totalVisitedHouses = santaVisitedHousesAsStrings.concat(roboVisitedHousesAsStrings);
const totalUniqueVisitedHouses = Array.from(new Set(totalVisitedHouses));
const numTotalUniqueVisitedHouses = totalUniqueVisitedHouses.length;

console.log(`Part 2: ${numTotalUniqueVisitedHouses} houses receive at least one present with RoboSanta helping.`);
