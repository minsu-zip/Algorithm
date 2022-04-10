const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const n_arr = input.slice(1).map((x) => x.replace('\r', ''))
const graph = n_arr.map((x) => String(x).split('').map(Number))

// 상하좌우
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]
let cnt = []

function DFS(i, j, move) {
  if (i === n - 1 && j === m - 1) {
    cnt.push(move)
    return
  }

  // 현재 탐색 중인 경로가 최소 경로보다
  // 이동거리가 많다면 경로를 탐색할 필요가 없다.
  if (Math.min(...cnt) < move) {
    return
  }

  for (let k = 0; k < 4; k++) {
    let mx = i + dx[k]
    let my = j + dy[k]
    if (isRange(mx, my) && graph[mx][my]) {
      graph[mx][my] = 0
      DFS(mx, my, move + 1)
      graph[mx][my] = 1
    }
  }
}

// 인덱스 검증
function isRange(dx, dy) {
  if (dx >= 0 && dy >= 0 && dx < n && dy < m) {
    return true
  }
  return false
}

function solution() {
  let answer = 0
  DFS(0, 0, 1)
  answer = Math.min(...cnt)

  return answer
}

console.log(solution())
