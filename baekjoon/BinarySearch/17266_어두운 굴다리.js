const fs = require('fs')
const [n, m, input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const N = Number(n)
const M = Number(m)
const arr = input.split(' ').map(Number)

function solution() {
  let answer = 0
  // 가로등 하나인 경우
  if (M === 1) {
    return Math.max(arr[0], N - arr[0])
  } else {
    for (let i = 0; i < M; i++) {
      let height = 0
      // 첫번째 가로등
      if (i === 0) {
        height = arr[0]
      }
      // 마지막 가로등
      else if (i === M - 1) {
        height = N - arr[i]
      }
      // 중간 가로등
      else {
        let tmp = arr[i] - arr[i - 1]
        // 짝수
        if (tmp % 2 === 0) {
          height = parseInt(tmp / 2)
        } else {
          height = parseInt((tmp + 1) / 2)
        }
      }
      answer = Math.max(height, answer)
    }
  }

  return answer
}

console.log(solution())
