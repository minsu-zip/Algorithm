const fs = require('fs')
let N = Number(fs.readFileSync('../input.txt').toString())

function solution() {
  const tile = [0, 4, 6]

  for (let i = 3; i <= N; i++) {
    tile.push(BigInt(tile[i - 2]) + BigInt(tile[i - 1]))
  }

  return String(tile[N])
}

console.log(solution())
