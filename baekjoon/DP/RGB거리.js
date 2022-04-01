const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, ...n_arr] = input.slice()
const m = n_arr.map((el) => el.trim().split(/\s/).map(Number))

function solution() {
  let answer = 0
  const dp = Array.from(Array(Number(n)), () => Array(3).fill(0))
  // 0번째 초기화
  dp[0][0] = m[0][0]
  dp[0][1] = m[0][1]
  dp[0][2] = m[0][2]
  for (let i = 1; i < Number(n); i++) {
    // i, i-1이 서로 다른 색상을 가져야하기 때문에
    // i에서 가져야 하는 색상을 제외한 색상 중 i-1에서 최소값을 구한다.
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + m[i][0]
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + m[i][1]
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + m[i][2]
  }
  answer = Math.min(...dp[Number(n - 1)]) // 누적된 값중에서 최소값을 찾는다.
  return answer
}

console.log(solution())
