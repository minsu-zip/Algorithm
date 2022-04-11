const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const n_arr = input.slice(1).map((x) => x.replace('\r', ''))
const graph = n_arr.map((x) => String(x).split('').map(Number))

// 상하좌우
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

// 인덱스 검증
function isRange(mx, my) {
  if (mx >= 0 && my >= 0 && mx < n && my < n) {
    return true
  }
  return false
}

function DFS(i, j) {
  const queue = [[i, j]]
  let cnt = 1

  while (queue.length) {
    let [x, y] = queue.shift()
    for (let k = 0; k < 4; k++) {
      let mx = x + dx[k]
      let my = y + dy[k]
      if (isRange(mx, my) && graph[mx][my]) {
        cnt += 1
        graph[mx][my] = 0
        queue.push([mx, my])
      }
    }
  }
  return cnt
}

function solution() {
  let answer = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        graph[i][j] = 0
        answer.push(DFS(i, j))
      }
    }
  }

  console.log(answer.length)
  answer.sort((a, b) => a - b).map((x) => console.log(x))
}

solution()
