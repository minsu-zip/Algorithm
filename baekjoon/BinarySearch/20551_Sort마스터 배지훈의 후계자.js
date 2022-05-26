const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)

nArr = input.slice(0, n).map((x) => Number(x.trim()))
nArr.sort((a, b) => a - b)
mArr = input.slice(n).map((x) => Number(x.trim()))

function solution() {
  const answer = []
  for (const find of mArr) {
    let start = 0
    let end = n - 1
    let index = -1
    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      if (nArr[mid] === find) {
        index = mid
        end = mid - 1
      } else if (nArr[mid] > find) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    answer.push(index)
  }

  return answer.join('\n')
}

console.log(solution())
