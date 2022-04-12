const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const T = Number(input.shift())
let [M, N, K] = [0]

// 상하좌우
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

// 인덱스 검증
function isRange(dx, dy) {
  if (dx >= 0 && dy >= 0 && dx < M && dy < N) {
    return true
  }
  return false
}

function BFS(graph, x, y) {
  let queue = [[x, y]]

  while (queue.length) {
    let [i, j] = queue.shift()
    for (let k = 0; k < 4; k++) {
      let mx = i + dx[k]
      let my = j + dy[k]
      if (isRange(mx, my) && graph[mx][my]) {
        graph[mx][my] = 0
        queue.push([mx, my])
      }
    }
  }
}

function solution(graph) {
  let answer = 0
  graph.forEach((_, i) => {
    graph[i].forEach((_, j) => {
      if (graph[i][j]) {
        graph[i][j] = 0
        answer += 1
        BFS(graph, i, j)
      }
    })
  })
  console.log(answer)
}

// 테스트 케이스 분류
for (let i = 0; i < T; i++) {
  ;[M, N, K] = input[0].toString().split(' ').map(Number)
  let graph = Array.from(Array(M), () => Array(N).fill(0))
  for (let j = 1; j <= K; j++) {
    const [x, y] = input[j].toString().split(' ').map(Number)
    graph[x][y] = 1
  }
  input.splice(0, K + 1)
  solution(graph)
}
