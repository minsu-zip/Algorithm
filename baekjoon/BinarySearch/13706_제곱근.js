const fs = require('fs')
const N = Number(fs.readFileSync('../input.txt').toString().trim())

function solution() {
  let answer = 0
  let start = 1
  let end = N

  while (true) {
    let mid = parseInt((start + end) / 2)

    if (mid * mid === N) {
      answer = mid
      break
    } else if (mid * mid > N) {
      end = mid - 1
    } else if (mid * mid < N) {
      start = mid + 1
    }
  }

  return answer
}

console.log(solution())
