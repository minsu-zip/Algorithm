// 순열 구하기 (DFS)

const permutation = []

function DFS(n, m, i, visited, arr) {
  if (arr.length >= m) {
    console.log(...arr)
    permutation.push(arr)
    return
  }

  for (let j = 0; j < n.length; j++) {
    if (visited[j] === 0) {
      visited[j] = 1
      DFS(n, m, i + 1, visited, [...arr, n[j]])
      visited[j] = 0
    }
  }
}

function solution(n, m) {
  let answer = 0

  // 중복 제거를 위해 방문 체크
  let visited = Array.from({ length: n.length }, () => 0)

  DFS(n, m, 0, visited, [])
  answer = permutation.length
  return answer
}

let n = [3, 6, 9]
console.log(solution(n, 2))
