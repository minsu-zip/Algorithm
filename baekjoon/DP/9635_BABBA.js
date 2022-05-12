const fs = require('fs')
let N = Number(fs.readFileSync('../input.txt').toString())

function solution() {
  // 1번 2번 3번 클릭시 각 횟수
  const a = [0, 0, 1, 1]
  const b = [0, 1, 1, 2]

  for (let i = 4; i <= N; i++) {
    a.push(a[i - 1] + a[i - 2])
    b.push(b[i - 1] + b[i - 2])
  }
  console.log(a[N], b[N])
}

solution()
