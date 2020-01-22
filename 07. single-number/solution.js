var singleNumber = function (nums) {
  const numSet = new Set();
  nums.forEach(num => {
    numSet.has(num) ? numSet.delete(num) : numSet.add(num);
  })
  return [...numSet][0];
};