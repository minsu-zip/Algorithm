const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()
const n = Number(input)

function solution() {
  let answer = 0
  // 편의상 1부터 인덱스 사용
  let dp = Array.from(Array(n + 1), () => Array(10).fill(0))
  // 한 자리인 경우 초기화 (0 제외)
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1
  }

  // i는 자리수 j는 0~9
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      // 마지막 자리가 0인 경우 => 1에서만 0으로 만들 수 있다.
      if (j === 0) {
        dp[i][j] = dp[i - 1][1]
      }
      // 마지막 자리가 9인 경우 => 8에서만 9로 만들 수 있다.
      else if (j === 9) {
        dp[i][j] = dp[i - 1][8]
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000
      }
    }
  }

  answer = dp[n].reduce((a, b) => a + b, 0)

  return answer % 1000000000
}

console.log(solution())
