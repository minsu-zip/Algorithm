const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()

function solution() {
  let result = input
  let cnt = 0
  while (result.length !== 1) {
    let sum = 0
    for (let i = 0; i < result.length; i++) {
      sum += Number(result[i])
    }
    cnt += 1
    result = String(sum)
  }

  console.log(cnt)
  if (Number(result) % 3 === 0) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}
solution()
