const fs = require('fs')
let [n, m, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
n = Number(n)
m = Number(m)
let array = input.map((el) => el.split(' ').map(Number))

function bfs(graph) {
  let cnt = 0 // 결혼식 참석자 수
  const queue = []
  const visited = Array.from(Array(n + 1).fill(false))
  visited[1] = true
  // 상근이 친구
  for (let i of graph[1]) {
    queue.push(i)
    visited[i] = true
    cnt += 1
  }

  while (queue.length) {
    const tmp = queue.shift()
    // 상근이 친구의 친구
    for (let i of graph[tmp]) {
      if (visited[i] === false) {
        visited[i] = true
        cnt += 1
      }
    }
  }

  return cnt
}

function solution() {
  const graph = Array.from(Array(n + 1), () => [])
  for (const [x, y] of array) {
    graph[x].push(y)
    graph[y].push(x)
  }

  return bfs(graph)
}

console.log(solution())
