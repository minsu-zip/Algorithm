const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const n_arr = input.slice(1).map((x) => x.replace('\r', ''))
const graph = n_arr.map((x) => String(x).split('').map(Number))

// 상하좌우
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

// 인덱스 검증
function isRange(dx, dy) {
  if (dx >= 0 && dy >= 0 && dx < n && dy < m) {
    return true
  }
  return false
}

function BFS() {
  // x축 좌표, y축 좌표, 이동 횟수
  const queue = [[0, 0, 1]]

  while (queue.length > 0) {
    let [i, j, move] = queue.shift()

    // 넓이우선 탐색이 완료되었을 경우 이동 횟수 return
    if (i === n - 1 && j === m - 1) {
      return move
    }

    for (let k = 0; k < 4; k++) {
      let mx = i + dx[k]
      let my = j + dy[k]
      if (isRange(mx, my) && graph[mx][my]) {
        graph[mx][my] = 0
        queue.push([mx, my, move + 1])
      }
    }
  }
}

console.log(BFS())
