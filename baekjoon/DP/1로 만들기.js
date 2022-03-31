const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()

let N = Number(input)
let answer = Array.from(Array(N + 1), () => 0)
answer[2] = 1
answer[3] = 1

for (let i = 4; i <= N; i++) {
  // -1 하는 경우 -> 이전 값의 경우의 수 +1
  answer[i] = answer[i - 1] + 1
  // 3으로 나누어지는 경우 -> 3으로 나눈 값의 경우의 수 +1
  if (i % 3 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 3] + 1)
  }
  // 2로 나누어지는 경우 -> 2로 나눈 값의 경우의 수 +1
  if (i % 2 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 2] + 1)
  }
}

console.log(answer[N])
