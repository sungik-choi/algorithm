// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  var answer = skill_trees.length;
  const skills = [...skill];

  for (let i = 0; i < skill_trees.length; i++) {
    let nextSkill = 0;

    for (let j = 0; j < skill_trees[i].length; j++) {
      const target = skill_trees[i][j];
      const index = skills.indexOf(target);

      if (index === -1) continue;
      if (index !== nextSkill) {
        answer -= 1;
        break;
      } else nextSkill += 1;
    }
  }

  return answer;
}
