const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(/\s/).map(Number)

function solution() {
  let answer = 0
  let dp = Array.from(Array(n), () => 0)
  dp[0] = 1 // 첫 번째 값은 무조건 1의 길이를 가진다.

  for (let i = 1; i < n; i++) {
    let max = 0 // 최대 증가 길이
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        max = Math.max(max, dp[j])
      }
    }
    dp[i] = max + 1 // 앞의 증가 길이 + 1
  }
  answer = Math.max(...dp) // 최대 증가 길이
  return answer
}

console.log(solution())
