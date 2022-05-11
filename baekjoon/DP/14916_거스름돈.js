const fs = require('fs')
let N = Number(fs.readFileSync('../input.txt').toString())

function solution() {
  let answer = 0
  while (N > 0) {
    if (N % 5 === 0) {
      answer += N / 5
      N = 0
      break
    }
    N -= 2
    answer += 1
  }

  return N === 0 ? answer : -1
}

console.log(solution())
