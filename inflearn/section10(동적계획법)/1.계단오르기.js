// 계단오르기 DP

function solution(n) {
  let answer = 0
  let dp = Array.from(Array(n + 1)).fill(0)
  dp[1] = 1 // 첫 번째 계단 경우의 수
  dp[2] = 2 // 두 번째 계단 경우의 수

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  answer = dp[n]
  return answer
}

console.log(solution(7))
