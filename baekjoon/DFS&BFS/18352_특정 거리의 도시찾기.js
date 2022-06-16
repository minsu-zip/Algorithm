const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m, k, x] = nm.split(' ').map(Number)
const array = input.map((el) => el.split(' ').map(Number))

function bfs(x, graph) {
  const result = []
  // 도시 방문 처리
  const visited = Array.from(Array(n + 1).fill(false))
  visited[x] = true
  // 시작 도시와 연결된 [도시 정보, 거리]
  const queue = [[x, 0]]

  while (queue.length) {
    const [city, dist] = queue.shift()
    // 거리가 K일 때
    if (dist === k) {
      result.push(city)
    } else if (dist < k) {
      graph[city].forEach((el) => {
        // 인접도시이고 방문한적 없는 도시일때 queue삽입
        if (visited[el] === false) {
          visited[el] = true
          queue.push([el, dist + 1])
        }
      })
    }
  }

  return result
}

function solution() {
  let answer = []
  const graph = Array.from(Array(n + 1), () => [])
  array.forEach(([x, y]) => {
    graph[x].push(y)
  })

  answer = bfs(x, graph)
  // 도시 정보 오름차순
  answer.sort((a, b) => a - b)

  if (answer.length === 0) {
    return -1
  } else {
    return answer.join('\n')
  }
}

console.log(solution())
