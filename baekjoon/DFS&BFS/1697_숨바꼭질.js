const fs = require('fs')
const [n, k] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)

function isVal(k) {
  if (k < 0 || k > 100000) return false
  return true
}

function solution() {
  // 수빈이와 동생의 위치가 같은 경우
  if (n === k) return 0

  // 동일한 위치에 대한 중복 처리
  let visited = Array.from(Array(100001).fill(1))

  const queue = [[n, 0]]
  let time = 0

  while (queue.length) {
    let [move, second] = queue.shift()

    if (move === k) {
      time = second
      break
    }

    // 수빈이와 동생은 0이상의 점에 있으므로
    if (visited[move - 1] && isVal(move - 1)) {
      // 방문 기록
      visited[move - 1] = 0
      queue.push([move - 1, second + 1])
    }
    if (visited[move + 1] && isVal(move + 1)) {
      visited[move + 1] = 0
      queue.push([move + 1, second + 1])
    }
    if (visited[move * 2] && isVal(move * 2)) {
      visited[move * 2] = 0
      queue.push([move * 2, second + 1])
    }
  }

  return time
}

console.log(solution())
