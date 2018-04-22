const fs = require('fs');

const data = fs.readFileSync('./puzzleinput.txt');
const text = data.toString();
const parcelArray = text.split('\n');
parcelArray.pop();

const parcelDimensionsArray = parcelArray.map((parcel) => {
  return parcel.split('x');
});


let wrappingPaperTotal = 0;
let ribbonTotal = 0;

parcelDimensionsArray.forEach((parcel) => {
  for (let i=0; i<3; i++) {
    parcel[i] = Number(parcel[i]);
  }
  const parcelSorted = parcel.sort((a, b) => {
    return (a-b);
  });
  wrappingPaperTotal += (2*parcelSorted[0]*parcelSorted[1] + 2*parcelSorted[1]*parcelSorted[2] + 2*parcelSorted[0]*parcelSorted[2] + parcelSorted[0]*parcelSorted[1]);
  ribbonTotal += (2*parcelSorted[0] + 2*parcelSorted[1] + parcelSorted[0]*parcelSorted[1]*parcelSorted[2]);
});

console.log(`Part 1: They should order ${wrappingPaperTotal} square feet of paper.`);
console.log(`Part 2: They should order ${ribbonTotal} feet of ribbon.`);
