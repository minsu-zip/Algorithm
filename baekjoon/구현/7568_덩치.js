const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const array = input.map((el) => el.split(' ').map(Number))

function solution() {
  const answer = Array.from(Array(Number(n)).fill(0))

  for (let i = 0; i < array.length; i++) {
    let cnt = 1
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue
      if (array[i][0] < array[j][0] && array[i][1] < array[j][1]) {
        cnt += 1
      }
    }
    answer[i] = cnt
  }

  return answer.join(' ')
}

console.log(solution())
