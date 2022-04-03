const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(/\s/).map(Number)

function solution() {
  let answer = 0
  let dp = Array.from(Array(n).fill(0))
  dp[0] = arr[0]

  // i = 이전 누적합 + 현재 값 vs 현재 값
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
  }
  answer = Math.max(...dp)

  return answer
}
console.log(solution())
