const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const N = Number(n)
const graph = input.map((x) => x.trim().split(' ').map(Number))

// 인덱스 검증
const isRange = (dx, dy) => {
  if (dx >= 0 && dy >= 0 && dx < N && dy < N) {
    return true
  }
  return false
}

function solution() {
  const queue = [[0, 0]]

  while (queue.length) {
    const [x, y] = queue.shift()

    // 움직일 수 없는 경우
    if (graph[x][y] === 0) continue

    // 도착 지점
    if (graph[x][y] === -1) {
      return 'HaruHaru'
    } else {
      // 밑으로만 가는 경우
      if (isRange(x + 1 * graph[x][y], y)) {
        queue.push([x + 1 * graph[x][y], y])
      }
      // 오른쪽으로만 가는 경우
      if ((x, y + 1 * graph[x][y])) {
        queue.push([x, y + 1 * graph[x][y]])
      }
    }
  }
  return 'Hing'
}

console.log(solution())
