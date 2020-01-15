//
//  kNumber.js
//  programers
//
//  Created by Sungik-Choi on 2020/01/15.
//

const getNthNum = (targetArray, command) => {
  const sliceStartNum = command[0] - 1;
  const sliceEndNum = command[1];
  const nthNum = command[2] - 1;
  const slicedArr = targetArray.slice(sliceStartNum, sliceEndNum);
  slicedArr.sort((a, b) => a - b);
  return slicedArr[nthNum];
};

const solution = (targetArray, commandArray) => {
  const nthNumArray = [];
  let index = 0;
  while (index < commandArray.length) {
    nthNumArray.push(getNthNum(targetArray, commandArray[index]));
    index += 1;
  }
  return nthNumArray;
};