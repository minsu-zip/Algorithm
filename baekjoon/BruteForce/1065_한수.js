const fs = require('fs')
const n = Number(fs.readFileSync('../input.txt').toString().trim())

function solution() {
  let answer = 0

  for (let i = 1; i <= n; i++) {
    if (i < 100) {
      answer += 1
    } else {
      let quotient = String(i).split('')
      let compare = new Set()

      for (let j = 1; j < quotient.length; j++) {
        compare.add(quotient[j - 1] - quotient[j])
      }

      if (compare.size === 1) answer += 1
    }
  }
  return answer
}

console.log(solution())
