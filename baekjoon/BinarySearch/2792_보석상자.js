const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m] = input.shift().split(' ').map(Number)
const arr = input.map(Number)

function solution() {
  let answer = 0
  let start = 1
  let end = Math.max(...arr)
  while (start <= end) {
    let mid = parseInt((start + end) / 2) // 나눠줄 보석 개수
    // 나눠준 학생 수
    // 나머지가 있는 경우 나눠줄 학생수 +1
    // 나머지가 없는 경우 나줘줄 학생수
    let people = arr.reduce(
      (acc, cur) =>
        cur % mid > 0
          ? acc + parseInt(cur / mid) + 1
          : acc + parseInt(cur / mid),
      0
    )

    if (people > n) {
      start = mid + 1
    } else {
      end = mid - 1
      answer = mid
    }
  }

  return answer
}

console.log(solution())
