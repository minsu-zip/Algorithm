const fs = require('fs')
const [R, C, W] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function solution() {
  let answer = 0
  const arr = Array.from(Array(R + W), () => [1, 1])

  for (let i = 2; i < arr.length; i++) {
    for (let j = 2; j <= i; j++) {
      arr[i].push((arr[i - 1][j] || 0) + arr[i - 1][j - 1])
    }
  }

  let end = C + 1
  for (let i = R; i < R + W; i++) {
    for (let j = C; j < end; j++) {
      answer += arr[i][j]
    }
    end += 1
  }

  return answer
}

console.log(solution())
