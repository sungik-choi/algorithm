# 202. Happy Number

<https://leetcode.com/problems/happy-number/>

```
Input: 19
Output: true
Explanation: 
1**2 + 9**2 = 82
8**2 + 2**2 = 68
6**2 + 8**2 = 100
1**2 + 0**2 + 0**2 = 1
```

수를 한글자씩 쪼개서 더하는 걸 반복, 최종적으로 `1`이 나오면 그 수는 `해피 넘버`가 된다.

---

## 풀이

```JavaScript
const addSquares = num => {
  let sum = 0;
  String(num).split('').forEach(digit => sum += Number(digit) ** 2);
  return sum;
}

const isHappy = num => {
  const numberMap = new Map();
  let sum = addSquares(num);

  while (sum !== 1) {
    if (numberMap.get(sum) === 'cycle') {
      return false
    }
    numberMap.set(sum, 'cycle');
    sum = addSquares(sum);
  }
  return true;
}
```

1. 입력된 `number`를 `string`으로 만든 후, `split`으로 쪼개서 그들을 제곱한 `sum`을 반환하는 함수 제작.

2. 새로운 `Map`을 만들고, `sum`이 `1`이 되기 전까지 `while` 반복문으로 반복해서 수를 쪼개면서 검사한다. `sum`값은 `Map.set`으로 계속 저장해둔다.

3. 해피 넘버가 아닌 수는 순환 고리에 빠지게 되므로, 이를 감지하기 위해 반복문 시작 첫행에 `Map.get`으로 수를 찾아서, 이미 들어있는 수라면 `false`를 반환하고 종료, 반복문 조건`(sum === 1)`을 달성하고 빠져나온 수는 `true`를 반환한다.

> 문제의 카테고리가 Hash여서 Map을 사용하기는 했는데, 왜 Map이여야만 하는지 아직 제대로 이해를 못하고 있다.

---

## 다른 사람 풀이

```JavaScript
var isHappy = function(n) {
    let store = new Set();
    
    while(n !== 1 && !store.has(n)) {
        store.add(n);
        
        n = n.toString().split('').reduce((acc, cur) => acc += Math.pow(cur, 2), 0);
    }
    
    return n === 1;
};
```

- Set으로 하면 하나의 값만 저장할 수 있겠구나. 
- 나는 sum이라는 변수를 하나 더 만들고, foreach로 거기에 수를 담았는데, reduce를 활용해서 한 줄로 해보는 걸 계속 시도해봐야겠다.