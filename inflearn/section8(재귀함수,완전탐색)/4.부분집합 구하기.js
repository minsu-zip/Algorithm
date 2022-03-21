// 부분집합 구하기(DFS)

// 후위 순회 참고
// 후위 순회 로직을 수행하면서 포함된 인덱스를 배열에 넣어주고 재귀 종료시 전체 출력
function recursion(v, n, arr) {
  if (v > n) return

  recursion(v + 1, n, [...arr, v + 1])
  recursion(v + 2, n, [...arr, v + 2])

  if (arr.length > 0) console.log(...arr)
}

function solution(n) {
  // 1 포함
  recursion(1, n, [1])
  // 1 미포함
  recursion(1, n, [])
}

let n = 3
solution(n)
