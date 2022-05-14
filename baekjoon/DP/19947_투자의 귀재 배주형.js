const fs = require('fs')
const [H, Y] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function solution() {
  const dp = Array.from(Array(Y + 1).fill(0))
  dp[0] = H

  for (let i = 1; i <= Y; i++) {
    dp[i] = Math.max(parseInt(dp[i - 1] * 1.05))
    if (i >= 3) {
      dp[i] = Math.max(dp[i], parseInt(dp[i - 3] * 1.2))
    }
    if (i >= 5) {
      dp[i] = Math.max(dp[i], parseInt(dp[i - 5] * 1.35))
    }
  }

  return dp[Y]
}

console.log(solution())
