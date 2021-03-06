const fs = require('fs');

const getText = (source) => {
  const data = fs.readFileSync(source);
  return data.toString();
}

const splitIntoArray = (text) => {
  return text.split('');
}

const data = splitIntoArray(getText('./puzzleinput.txt'));

let floor = 0;
const arrayOfBasementIndexes = [];


data.forEach((character, index) => {
  if (character === '(') {
    floor++;
  } else if (character === ')') {
    floor--;
  }

  if (floor === -1) {
    arrayOfBasementIndexes.push(index);
  }
});

const position = arrayOfBasementIndexes[0] + 1;


console.log(`Part 1: The floor is ${floor}.`);
console.log(`Part 2: He goes to the basement at position ${position}.`);
