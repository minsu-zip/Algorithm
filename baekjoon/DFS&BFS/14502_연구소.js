const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)
const graph = input.map((x) => x.split(' ').map(Number))

let answer = 0 // 안전 지역 최대 개수
const virus = [] // 바이러스 좌표

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
function copyArray(array) {
  return array.map((_, i) => [...array[i]])
}

// 안전지역 갯수 찾기
function safeArea(wallGraph) {
  let cnt = 0
  wallGraph.forEach((_, i) => {
    wallGraph[i].forEach((_, j) => {
      if (wallGraph[i][j] === 0) {
        cnt += 1
      }
    })
  })
  answer = Math.max(answer, cnt)
}

function BFS(wallGraph) {
  let queue = copyArray(virus)

  while (queue.length) {
    let [i, j] = queue.shift()
    for (let k = 0; k < 4; k++) {
      let mx = i + dx[k]
      let my = j + dy[k]

      if (isRange(mx, my) && wallGraph[mx][my] === 0) {
        wallGraph[mx][my] = 2
        queue.push([mx, my])
      }
    }
  }

  safeArea(wallGraph)
}

function solution() {
  let safeZone = [] // 벽을 설치할 수 있는 0의 좌표

  graph.forEach((_, i) => {
    graph[i].forEach((_, j) => {
      if (graph[i][j] === 0) {
        safeZone.push([i, j])
      }
      // 바이러스 좌표
      else if (graph[i][j] === 2) {
        virus.push([i, j])
      }
    })
  })

  // 벽 세개 세우기
  // graph[i] 번째 반복하면서 0의 인덱스 3개를 찾아서 벽을 세운 후 BFS 실행
  // BFS 종료 후 벽을 없애고 새로운 벽 3개를 찾아 BFS 실행
  for (let i = 0; i < safeZone.length - 2; i++) {
    for (let j = i + 1; j < safeZone.length - 1; j++) {
      for (let k = j + 1; k < safeZone.length; k++) {
        let wallGraph = copyArray(graph)
        wallGraph[safeZone[i][0]][safeZone[i][1]] = 1
        wallGraph[safeZone[j][0]][safeZone[j][1]] = 1
        wallGraph[safeZone[k][0]][safeZone[k][1]] = 1
        BFS(wallGraph)
      }
    }
  }

  return answer
}

console.log(solution())
