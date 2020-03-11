# 두 정수 사이의 합

<https://programmers.co.kr/learn/courses/30/lessons/12912/solution_groups?language=javascript>

## 나의 풀이

```js
function solution(a, b) {
  let answer = 0;
  let smallNum;
  let bigNum;
  if (a === b) return a;
  if (a > b) {
    smallNum = b;
    bigNum = a;
  } else if (a < b) {
    smallNum = a;
    bigNum = b;
  }
  for (let i = smallNum; i <= bigNum; i += 1) {
    answer += i;
  }
  return answer;
}

```

## 다른 사람의 풀이

```js
function solution(a, b){
    var result = 0
    return (a+b)*(Math.abs(b-a)+1)/2;
}
```

노트에 다 적어놓고 이 공식을 도출해내지 못했다. 가우스의 재림... 수포자의 비애인가...
