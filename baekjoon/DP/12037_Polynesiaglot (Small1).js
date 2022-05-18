const fs = require('fs')
const [T, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const arr = input.map((x) => x.trim().split(' ').map(Number))

function solution() {
  arr.forEach(([C, V, L], i) => {
    const dp = Array.from(Array(L), () => Array(2).fill(0))
    dp[0][0] = V // 모음으로 끝나는 경우
    dp[0][1] = 0 // 자음으로 끝나는 경우
    for (let i = 1; i < L; i++) {
      dp[i][0] = ((dp[i - 1][0] + dp[i - 1][1]) * V) % 1000000007 // 이전에 모음, 자음이 나올 경우의 수  * 모음이 나올 경우의 수
      dp[i][1] = (C * dp[i - 1][0]) % 1000000007 // 이전에 자음이 나올 경우의 수 * 모음이 나올 경우의 수
    }
    console.log(`Case #${i + 1}: ${dp[L - 1][0] + dp[L - 1][1]}`)
  })
}

solution()
