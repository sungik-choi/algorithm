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

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
);
