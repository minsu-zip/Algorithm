const fs = require('fs')
let [n, nArr, m, mArr] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
n = Number(n)
nArr = nArr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
mArr = mArr.split(' ').map(Number)

function solution() {
  const answer = []
  for (const find of mArr) {
    let start = 0
    let end = n - 1
    let check = false

    while (start <= end) {
      let mid = parseInt((start + end) / 2)
      if (nArr[mid] === find) {
        check = true
        break
      } else if (nArr[mid] > find) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    answer.push(check ? 1 : 0)
  }
  // 마지막에 한 번에 출력시 시간 초과 회피 가능
  console.log(answer.join('\n'))
}

solution()
