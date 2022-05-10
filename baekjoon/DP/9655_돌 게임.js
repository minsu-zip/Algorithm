const fs = require('fs')
let N = Number(fs.readFileSync('../input.txt').toString())

function solution() {
  let i = 0
  while (N > 0) {
    if (N >= 3) {
      N -= 3
    } else {
      N -= 1
    }
    i += 1
  }

  if (i % 2 === 0) return 'CY'
  else return 'SK'
}

console.log(solution())
