// 중복순열 구하기 (다중 for문과 재귀의 차이점)

function DFS(n, m, i, arr) {
  // 모든 n 탐색 완료
  if (i >= n) {
    return
  }

  // n 만큼 조합
  for (let j = 1; j <= n; j++) {
    DFS(n, m, i + 1, [...arr, j])
  }

  // m 조합 개수일 때만 출력
  if (arr.length >= m) console.log(...arr)
}

// 다중 for문의 한계 : m값에 따라 이중for, 삼중for...조건이 바뀜
function forFn(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j)
    }
  }
}

function solution(n, m) {
  let answer = n ** m

  forFn(n)
  console.log('----------------')
  DFS(n, m, 0, [])

  return answer
}

console.log(solution(3, 2))
