# 136. Single Number

Given a non-empty array of integers, every element appears *twice* except for one. Find that single one.

**Note:**

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**
```
Input: [2,2,1]
Output: 1
```
**Example 2:**
```
Input: [4,1,2,1,2]
Output: 4
```

--- 

## 풀이

```JavaScript
var singleNumber = function (nums) {
  const numSet = new Set();
  nums.forEach(num => {
    numSet.has(num) ? numSet.delete(num) : numSet.add(num);
  })
  return [...numSet][0];
};
```

1. 한 가지의 수만 빼면 모두 **두 번씩** 반복되므로, set을 만들고 처음엔 add를 하였다가, 그 수가 있는걸 확인하면 delete로 수를 삭제하면 되겠다고 생각했다. 결국 나머지 수는 싱글 넘버가 되니까.
2. 그런데 Set에서 하나 남은 수를 어떻게 반환하지? 고민하던 중 산술연산자 `...`를 쓰면 배열로 변경해준다고 해서, 배열로 변경 후 유일한 0번째 요소(싱글 넘버)를 리턴하게 했다.

---

## 다른 사람 풀이

```JavaScript
var singleNumber = function(nums) {
    let sum = 0;
    nums.forEach((num) => sum ^= num);
    return sum;
};
```

비트 연산자를 사용한 거 같은데 대체 뭐지?