const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
function solution() {
  let array = new Set()
  for (let i = 0; i < Number(n); i++) {
    if (input[i].includes('all')) {
      let tmp = Array.from(Array(20), (_, i) => i + 1)
      array = new Set([...tmp])
    } else if (input[i].includes('empty')) {
      array.clear()
    } else {
      let [command, m] = input[i].split(' ')
      m = Number(m)
      switch (command) {
        case 'add':
          array.add(m)
          break
        case 'remove':
          array.delete(m)
          break
        case 'check':
          if (array.has(m)) {
            console.log(1)
          } else {
            console.log(0)
          }
          break
        case 'toggle':
          if (array.has(m)) {
            array.delete(m)
          } else {
            array.add(m)
          }
          break
      }
    }
  }
}

console.log(solution())
