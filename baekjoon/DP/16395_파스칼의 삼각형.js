const fs = require('fs')
const [N, K] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function solution() {
  const arr = Array.from(Array(N), () => [1])

  for (let i = 1; i < N; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i].push((arr[i - 1][j] || 0) + arr[i - 1][j - 1])
    }
  }

  return arr[N - 1][K - 1]
}

console.log(solution())
