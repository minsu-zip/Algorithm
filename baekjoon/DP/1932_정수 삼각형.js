const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
let [n, ...n_arr] = input.slice()
n = Number(n)
const m = n_arr.map((el) => el.trim().split(/\s/).map(Number))

function solution() {
  let answer = 0
  let dp = m.map((el) => el.map((el) => 0))
  dp[0] = m[0]

  // i행, j열
  // i,j일때, 왼쪽 위 i-1,j-1의 값과 위의값 i-1, j중 큰 값으로 dp 테이블 초기화
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m[i].length; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1] || 0, dp[i - 1][j] || 0) + m[i][j]
    }
  }

  answer = Math.max(...dp[n - 1])
  return answer
}

console.log(solution())
