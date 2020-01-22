# 42578. 위장

<https://programmers.co.kr/learn/courses/30/lessons/42578>

## 풀이

```JavaScript
function solution(clothes) {
  const clothMap = new Map();
  let cases = 1;

  clothes.forEach(cloth => {
    const kinds = cloth[1];
    clothMap.get(kinds) ? clothMap.set(kinds, clothMap.get(kinds) + 1) : clothMap.set(kinds, 1);
  })

  for ( let value of clothMap.values() ) {
    cases *= (value + 1);
  }

  return cases - 1;
}
```

1. Map 만들고, clothes 순회하며 종류별로 갯수를 담기
2. `종류의 수 전체 합` `+` `종류의 수 * 다른 종류의 수 * ...`= 모든 경우의 수
3. 1가지 종류만 있을 경우 `종류의 수 * 다른 종류의 수 * ...` 가 의미 없으므로 예외 사항 추가
4. 거의 모든 테스트 케이스 통과 못함. 경우의 수를 잘못 구한듯 하다.

---

5. 도저히 모르겠어서 다른 사람의 공식을 참고했다.  
   
   `(종류의 수 + 1) * (다른 종류의 수 + 1) * ... - 1` 하면 딱 원하는 결과가 나온다. +1 하는 이유는 착용하지 않은 경우를 하나의 종류로 산정하고, 그리고 마지막의 -1은 모든 부위를 입지 않은 경우가 없기 때문에. 신기하다