const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()
const n = Number(input)

function solution() {
  let answer = 0
  let dp = [0, 1, 3, 5]

  for (let i = 4; i <= n; i++) {
    dp.push((dp[i - 2] * 2 + dp[i - 1]) % 10007)
  }
  answer = dp[n]

  return answer
}

console.log(solution())
