// 경로 탐색(인접행렬)

let path = [] // 탐색한 노드 경로

function DFS(n, graph, visited, v, arr) {
  if (v === n) {
    // 누적 경로 + 현재 경로
    path.push([...arr, v])
    return
  }

  visited[v] = 1 // 방문 처리

  // 인접 행렬을 순회하면서 방문하지 않은 노드들의 경로를 재귀적으로 탐색
  for (let j = 1; j <= n; j++) {
    if (graph[v][j] === 1 && visited[j] === 0) {
      DFS(n, graph, visited, j, [...arr, v])
      visited[v] = 0 // 방문 해체
    }
  }
}

function solution(n, node) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
  let visited = Array.from(Array(n + 1), () => 0) // 방문 처리

  for (let [x, y] of node) {
    graph[x][y] = 1
  }

  DFS(n, graph, visited, 1, [])

  console.log(path)
  answer = path.length
  return answer
}

let node = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]
console.log(solution(5, node))
