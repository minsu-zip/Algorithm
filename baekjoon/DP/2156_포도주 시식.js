const fs = require('fs')
const [n, ...arr] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

function solution() {
  let answer = 0
  let dp = Array.from(Array(n).fill(0))

  // 연속으로 3잔을 마시지 못한다 -> 현재 위치의 와인을 마시는 경우와 현재 위치의 와인을 마시지 않는 경우로 나뉜다.

  // 현재 위치의 와인을 마시는 경우는 또 두 가지의 경우로 나뉜다.
  // 1. 이전 와인을 마신 경우는 현재 와인 -3 위치의 와인까지 마시고 온 경우
  // 점화식 : dp[i - 3] + arr[i - 1] + arr[i],

  // 2. 이전 와인을 마시지 않은 경우는 -2 위치의 와인까지 마시고 온 경우
  // 점화식 : dp[i - 2] + arr[i],

  // 현재 위치의 와인을 마시지 않는 경우
  // 3. 이전 와인까지의 최대값
  // 점화식 : dp[i - 1]

  dp[0] = arr[0] // 첫 번째 잔
  dp[1] = arr[0] + arr[1] // 두 번째 잔
  dp[2] = Math.max(arr[1] + arr[2], dp[0] + arr[2], dp[1]) // 세 번째 잔

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      // 1번 경우
      dp[i - 3] + arr[i - 1] + arr[i],
      // 2번 경우
      dp[i - 2] + arr[i],
      // 3번 경우
      dp[i - 1]
    )
  }
  answer = dp[n - 1]

  return answer
}

console.log(solution())
