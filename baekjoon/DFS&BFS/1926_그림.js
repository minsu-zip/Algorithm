const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)
const graph = input.map((x) => x.split(' ').map(Number))
// 상하좌우
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

// 배열 인덱스 검사
function isRange(mx, my) {
  if (mx >= 0 && mx < n && my >= 0 && my < m) {
    return true
  } else {
    return false
  }
}

function bfs(i, j) {
  let cnt = 1
  graph[i][j] = 0 // 그림의 시작 위치
  const queue = [[i, j]]
  while (queue.length) {
    const [x, y] = queue.shift()

    for (let k = 0; k < 4; k++) {
      //   인접 그림 찾기
      const mx = x + dx[k]
      const my = y + dy[k]
      // 배열범위 안에 있고 그림이 있는 경우
      if (isRange(mx, my) && graph[mx][my] === 1) {
        cnt += 1
        graph[mx][my] = 0 // 그림 없애기
        queue.push([mx, my])
      }
    }
  }

  return cnt
}

function solution() {
  const answer = [0] // 그림의 넓이 (그림이 하나도 없는 경우는 0)
  let cnt = 0 // 그림 개수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        cnt += 1
        answer.push(bfs(i, j))
      }
    }
  }

  console.log(cnt)
  console.log(Math.max(...answer))
}

solution()
