// 순열 구하기 (DFS)
const permutation = []

function DFS(n, m, idx, arr) {
  if (idx >= n.length) {
    return
  }

  for (let j = 0; j < n.length; j++) {
    DFS(n, m, idx + 1, [...arr, n[j]])
  }

  let arrSet = new Set(arr)
  if (arrSet.size === m) {
    permutation.push(arr.Set)
    console.log(...arrSet)
  }
}

function solution(n, m) {
  let answer = 0
  DFS(n, m, 0, [])
  answer = permutation.length
  return answer
}

let n = [3, 6, 9]
console.log(solution(n, 2))
