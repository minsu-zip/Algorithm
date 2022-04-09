const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const n_arr = input.slice(1, n + 1)
const T = []
const P = []
n_arr.forEach((x) => {
  const [t, p] = x.split(' ').map(Number)
  T.push(t)
  P.push(p)
})

function solution() {
  let answer = 0
  let dp = Array.from(Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    if (i + T[i] > n) continue

    dp[i] += P[i]

    for (let j = i + T[i]; j < n; j++) {
      dp[j] = Math.max(dp[j], dp[i])
    }
  }
  answer = Math.max(...dp)

  return answer
}

console.log(solution())
