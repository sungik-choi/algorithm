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