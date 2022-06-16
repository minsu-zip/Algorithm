const fs = require('fs')
const [first, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m, r] = first.split(' ').map(Number)
const array = input.map((el) => el.split(' ').map(Number))

// 방문된 노드들을 순차적으로 출력하는 것이 아니라,
// 해당 노드들이 방문되는 순서를 기록해서 출력해야한다.
// i번째 줄에는 정점 i의 방문 순서를 출력한다.

function bfs(r, graph) {
  const visited = Array.from(Array(n + 1).fill(0))
  visited[r] = 1 // 시작 노드 방문 순서
  let cnt = 2 // 방문 순서
  const queue = [r] // 시작 노드

  while (queue.length) {
    const tmp = queue.shift()
    for (const i of graph[tmp]) {
      if (visited[i] === 0) {
        visited[i] = cnt
        queue.push(i)
        cnt += 1
      }
    }
  }
  visited.shift()

  return visited
}

function solution() {
  const graph = Array.from(Array(n + 1), () => [])
  array.forEach(([x, y]) => {
    graph[x].push(y)
    graph[y].push(x)
  })
  // 인접 정점 내림차순 정렬
  graph.forEach((data) => data.sort((a, b) => b - a))

  const answer = bfs(r, graph)

  return answer.join('\n')
}

console.log(solution())
