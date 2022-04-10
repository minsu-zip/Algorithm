const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m, v] = input[0].split(' ').map(Number)
const n_arr = input.slice(1)
const m_arr = n_arr.map((x) => x.split(' ').map(Number))

const dfs = []
const bfs = []

function DFS(graph, visited, s) {
  visited[s] = 1
  dfs.push(s)

  for (let i = 1; i <= n; i++) {
    if (graph[s][i] === 1 && visited[i] === 0) {
      DFS(graph, visited, i)
    }
  }
}

function BFS(graph, visited, s) {
  const queue = [s]
  visited[s] = 1

  while (queue.length > 0) {
    let tmp = queue.shift()
    bfs.push(tmp)
    for (let i = 1; i <= n; i++) {
      if (graph[tmp][i] === 1 && visited[i] === 0) {
        visited[i] = 1
        queue.push(i)
      }
    }
  }
}

function solution() {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
  let visited = Array.from(Array(n + 1).fill(0))

  for (let [x, y] of m_arr) {
    graph[x][y] = 1
    graph[y][x] = 1
  }

  DFS(graph, visited, v)
  visited = visited.fill(0)
  BFS(graph, visited, v)

  console.log(...dfs)
  console.log(...bfs)
}

solution()
