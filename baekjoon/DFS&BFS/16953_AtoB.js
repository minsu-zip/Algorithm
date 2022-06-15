const fs = require('fs')
const nm = fs.readFileSync('../input.txt').toString().trim()
const [n, m] = nm.split(' ').map(Number)

function solution() {
  const queue = [[n, 1]]
  while (queue.length) {
    const [number, cnt] = queue.shift()

    if (number === m) {
      return cnt
    }

    if (number * 2 <= m) queue.push([number * 2, cnt + 1])
    if (Number(number + '1') <= m) queue.push([Number(number + '1'), cnt + 1])
  }

  return -1
}

console.log(solution())
