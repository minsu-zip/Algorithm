const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)

function solution() {
  let answer = 0
  let start = 1 // 정수길이만큼 자른다고 가정
  let end = Math.max(...arr)

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let cnt = 0
    arr.forEach((x) => {
      cnt += parseInt(x / mid)
    })

    if (cnt >= m) {
      answer = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return answer
}

console.log(solution())
