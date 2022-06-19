const fs = require('fs')
const [nm, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const [n, m] = nm.split(' ').map(Number)
const array = input.map((el) => el.split(' ').map(Number))

function bfs(idx, graph) {
  let cnt = 0 // 해킹할 수 있는 컴퓨터 수
  const queue = [idx]
  // 이미 해킹한 것은 제외해야하기 때문에 방문자 배열 이용
  const visited = Array(n + 1).fill(false)
  visited[idx] = true

  while (queue.length) {
    const tmp = queue.shift()
    for (let i = 0; i < graph[tmp].length; i++) {
      const com = graph[tmp][i]
      if (visited[com] === false) {
        visited[com] = true
        queue.push(com)
        cnt += 1
      }
    }
  }

  return cnt
}

function solution() {
  let computer = Array(n + 1).fill(0) // 해킹한 컴퓨터 인덱스 = 해킹할 수 있는 컴퓨터 수
  const graph = Array.from(Array(n + 1), () => [])

  for (const [x, y] of array) {
    graph[y].push(x)
  }

  for (let idx = 1; idx <= n; idx++) {
    const cnt = bfs(idx, graph)
    // idx번째 컴퓨터가 해킹 할 수 있는 수
    computer[idx] = cnt
  }

  const max = Math.max(...computer)
  const answer = []
  // 최대로 해킹할 수 있는 컴퓨터를 찾아 컴퓨터 번호 저장
  computer.forEach((com, idx) => (com === max ? answer.push(idx) : ''))

  console.log(...answer)
}

solution()
