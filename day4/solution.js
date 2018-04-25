const crypto = require('crypto');
const input = 'bgvyzdsv';
const md5 = data => crypto.createHash('md5').update(data).digest('hex');

const areFirstFiveNumsZeros = hash => hash.slice(0,5) === '00000';
const areFirstSixNumsZeros = hash => hash.slice(0,6) === '000000';

let answer = 0;
for (answer = 0; answer < Infinity; answer++) {
  if(areFirstFiveNumsZeros(md5(`${input}${answer}`))) {
    break;
  }
}

console.log(`Part 1: ${answer}`);

let partTwo = 0;
for (partTwo = 0; partTwo < Infinity; partTwo++) {
  if(areFirstSixNumsZeros(md5(`${input}${partTwo}`))) {
    break;
  }
}

console.log(`Part 2: ${partTwo}`);
