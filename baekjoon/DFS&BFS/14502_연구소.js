const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)
const graph = input.map((x) => x.split(' ').map(Number))
const safeSize = new Set()

// 상하좌우
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

// 인덱스 검증
function isRange(dx, dy) {
  if (dx >= 0 && dy >= 0 && dx < n && dy < m) {
    return true
  }
  return false
}

// graph 복사
function copyGraph(graph) {
  let tmp = Array.from(Array(n), () => Array(0))
  graph.forEach((_, i) => {
    tmp[i].push(...graph[i])
  })
  return tmp
}

// 안전지역 갯수 찾기
function safeArea(graph) {
  let cnt = 0
  graph.forEach((_, i) => {
    graph[i].forEach((_, j) => {
      if (graph[i][j] === 0) {
        cnt += 1
      }
    })
  })
  safeSize.add(cnt)
}

function BFS(graph) {
  const queue = []

  // 바이러스 좌표 queue 삽입
  graph.forEach((_, i) => {
    graph[i].forEach((_, j) => {
      if (graph[i][j] === 2) {
        queue.push([i, j])
      }
    })
  })

  while (queue.length) {
    let [i, j] = queue.shift()
    for (let k = 0; k < 4; k++) {
      let mx = i + dx[k]
      let my = j + dy[k]

      if (isRange(mx, my) && graph[mx][my] === 0) {
        graph[mx][my] = 2
        queue.push([mx, my])
      }
    }
  }

  safeArea(graph)
}

// 벽 세우기
function wall(graph, k) {
  if (k === 3) {
    BFS(copyGraph(graph))
    return
  } else {
    graph.forEach((_, i) => {
      graph[i].forEach((_, j) => {
        if (graph[i][j] === 0) {
          graph[i][j] = 1
          wall(graph, k + 1)
          graph[i][j] = 0
        }
      })
    })
  }
}

function solution() {
  let answer = 0

  // 벽 세우기
  graph.forEach((_, i) => {
    graph[i].forEach((_, j) => {
      if (graph[i][j] === 0) {
        graph[i][j] = 1
        wall(graph, 1)
        graph[i][j] = 0
      }
    })
  })

  answer = Math.max(...safeSize)

  return answer
}

console.log(solution())
