const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, k] = nm.split(' ').map(Number)
const arr = input.map(Number)

function solution() {
  let queue = arr[0]
  let cnt = 1

  for (let i = 0; i < n; i++) {
    if (queue === k) {
      return cnt
    }
    queue = arr[queue]
    cnt += 1
  }

  return -1
}

console.log(solution())
