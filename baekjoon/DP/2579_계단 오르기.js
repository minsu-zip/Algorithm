const fs = require('fs')
const [n, ...arr] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x))

function solution() {
  let answer = 0
  let dp = Array.from(Array(n).fill(0))
  dp[0] = arr[0] // 첫 번째 계단
  dp[1] = arr[0] + arr[1] // 두 번째 계단
  dp[2] = Math.max(dp[0] + arr[2], arr[1] + arr[2]) // 세 번째 계단

  for (let i = 3; i < n; i++) {
    // i-2, i를 밟은 경우, i-3, i-1, i를 밟은 경우 중 최댓값
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i])
  }

  answer = dp[n - 1]
  return answer
}

console.log(solution())
