function solution(a, b) {
  const callback = (i, arr) => {
    if (arr[i] + 1 < arr[i + 1]) {
      arr.splice(i + 1, 0, arr[i] + 1);
    }
    console.log(arr);
    return arr;
  };

  const arr = [a, b]
    .sort((a, b) => {
      return a - b;
    })
    .reduce((acc, cur, index, array) => {
      callback(index, array);
      if (array[index] + 1 < array[index + 1]) callback(index, array);
      else {
        console.log(array[index] + 1, array[index + 1]);
        return array;
      }
    }, 0);
  return arr;
}

console.log(solution(9, 3));
