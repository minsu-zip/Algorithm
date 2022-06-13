const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const array = input.map((el) => el.trim().split(' ').map(Number))

// Spica 특징
// 1. Spica와 연결된 인접 선분은 3개
// 2. Spica와 연결된 인접 선분에서 연결된 인접 선분은 3,2,1의(총 6개) 선분 개수를 갖는다

function bfs(i, graph) {
  const queue = [...graph[i]]
  // 2. Spica와 연결된 인접 선분에서 연결된 인접 선분은 3,2,1의(총 6개) 선분 개수를 갖는다
  let cnt = 6
  while (queue.length) {
    const tmp = queue.shift()
    cnt -= graph[tmp].length
  }

  return cnt === 0 ? true : false
}

function solution() {
  const graph = Array.from(Array(13), () => Array(0))

  array.forEach(([x, y]) => {
    graph[x].push(y)
    graph[y].push(x)
  })

  for (let i = 1; i < 13; i++) {
    // 1. Spica와 연결된 인접 선분은 3개
    if (graph[i].length === 3) {
      if (bfs(i, graph)) {
        return i
      }
    }
  }
}

console.log(solution())
