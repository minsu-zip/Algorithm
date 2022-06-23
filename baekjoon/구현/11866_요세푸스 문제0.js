const fs = require('fs')
const [n, k] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function solution() {
  const answer = []
  const queue = Array.from(Array(n), (_, i) => i + 1)
  let cnt = 0

  while (queue.length) {
    cnt += 1
    if (cnt === k) {
      answer.push(queue.shift())
      cnt = 0
    } else {
      queue.push(queue.shift())
    }
  }

  let print = '<'
  print += answer.join(', ')
  print += '>'

  return print
}

console.log(solution())
