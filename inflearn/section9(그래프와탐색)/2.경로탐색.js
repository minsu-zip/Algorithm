// 경로 탐색(인접리스트)

let path = [] // 탐색한 노드 경로

function DFS(n, graph, visited, v, arr) {
  if (v === n) {
    // 누적 경로 + 현재 경로
    path.push([...arr, v])
  }
  visited[v] = 1 // 현재 노드 방문 표시

  // 현재 노드의 배열 길이까지 탐색
  for (let j = 0; j < graph[v].length; j++) {
    // 현재 노드 값에 해당하는 방문 배열이 방문 한 적 없을 때
    if (visited[graph[v][j]] === 0) {
      DFS(n, graph, visited, graph[v][j], [...arr, v])
      visited[graph[v][j]] = 0 // 방문 해제
    }
  }
}

function solution(n, node) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array(0))
  let visited = Array.from(Array(n + 1), () => 0) // 방문 처리

  for (let [x, y] of node) {
    graph[x].push(y)
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
