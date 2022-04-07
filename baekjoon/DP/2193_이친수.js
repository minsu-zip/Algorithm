const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
const n = Number(input)

function solution() {
  let answer = 0
  let dp = Array.from(Array(n + 1), () => Array(2))
  dp[1][0] = 0 // 1자리일때 0으로 끝나는 경우의 수
  dp[1][1] = 1 // 1자리일때 1로 끝나는 경우의 수
  // 점화식 dp[i][0] = dp[i-1][0] + dp[i-1][1] // i자리에 0이 올려면 이전 자리수가 0,1 상관없이 가능하다.
  // dp[i][1] = dp[i-1][0] // i자리에 1이 올려면 이전 자리수에서 0으로 끝나는 경우에만 끝에 1이 올 수 있다.

  for (let i = 2; i <= n; i++) {
    dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1])
    dp[i][1] = BigInt(dp[i - 1][0])
  }
  answer = String(BigInt(dp[n][0]) + BigInt(dp[n][1]))

  return answer
}

console.log(solution())
