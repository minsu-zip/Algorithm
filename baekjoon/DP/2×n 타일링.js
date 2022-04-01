const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()

function solution(input) {
  const dp = [0, 1, 2]

  for (let i = 3; i <= Number(input); i++) {
    dp.push((dp[i - 2] + dp[i - 1]) % 10007)
  }

  return dp[Number(input)]
}

console.log(solution(input))
