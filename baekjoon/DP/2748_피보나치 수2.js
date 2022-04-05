const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()
const n = Number(input)

function solution() {
  let answer = []
  let dp = Array.from(Array(n + 1).fill(0))
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2])
  }
  answer = dp[n].toString()

  return answer
}

console.log(solution())
