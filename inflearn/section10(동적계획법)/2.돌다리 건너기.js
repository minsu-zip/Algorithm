// 돌다리 건너기 DP

// 돌다리의 마지막 수가 도착지점이 아니라 개울이 마지막 위치인 것을 감안해야한다.
function solution(n) {
  let answer = 0
  let dp = Array.from(Array(n + 2), () => 0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i < n + 2; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  answer = dp[dp.length - 1]

  return answer
}

console.log(solution(7))
