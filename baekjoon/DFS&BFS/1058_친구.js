const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const N = Number(n)
const graph = input.map((x) => x.trim().split(''))

function bfs(i, visited) {
  // 시작 인덱스 방문 처리
  visited[i] = true
  const queue = [i]
  let cnt = 0

  // A의 친구들(친구 B의 집합)
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 'Y') {
      queue.push(j)
      visited[j] = true
      cnt += 1
    }
  }

  // A의 친구들의 친구(친구 C의 집합)
  while (queue.length) {
    const x = queue.shift()
    for (let j = 0; j < N; j++) {
      if (graph[x][j] === 'Y' && visited[j] === false) {
        visited[j] = true
        cnt += 1
      }
    }
  }
  return cnt
}

function solution() {
  let answer = 0
  const check = Array.from(Array(N).fill(false))

  for (let i = 0; i < N; i++) {
    if (graph[i].includes('Y')) {
      // 방문 배열 초기화 수행
      const visited = [...check]
      answer = Math.max(answer, bfs(i, visited))
    }
  }

  return answer
}

console.log(solution())
