// 2x2 확인
const isCompare = (graph, i, j) => {
  try {
    const block = graph[i][j]
    if (
      block &&
      block === graph[i + 1][j] &&
      block === graph[i][j + 1] &&
      block === graph[i + 1][j] &&
      block === graph[i + 1][j + 1]
    ) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

// 블록 제거
const removeBoard = (graph, m, n) => {
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!graph[i][j]) {
        let k = i
        while (k > 0) {
          graph[k][j] = graph[k - 1][j]
          k -= 1
        }
        graph[k][j] = 0
      }
    }
  }
}

function solution(m, n, board) {
  // 2x2 범위에 있는 경우 1로 초기화(방문 처리)
  // 블록을 제거한 경우 빈 공간은 0으로 초기화
  let answer = []
  const graph = board.map((x) => x.split(''))

  while (true) {
    let blocks = []
    // 2x2 찾으면 시작 위치 저장
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isCompare(graph, i, j)) {
          blocks.push([i, j])
        }
      }
    }

    // 2x2가 없는 경우
    if (!blocks.length) break

    // 시작 위치 기준으로 2x2 없애기
    blocks.forEach(([i, j]) => {
      graph[i][j] = 0
      graph[i + 1][j] = 0
      graph[i][j + 1] = 0
      graph[i + 1][j + 1] = 0
    })

    // 재정렬
    removeBoard(graph, m, n)
  }
  // 0 개수 세기
  answer = graph
    .map((block) => block.filter((x) => !x).length)
    .reduce((acc, cur) => acc + cur, 0)

  return answer
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])) // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']) // 15
)
console.log(solution(4, 4, ['ABCD', 'BACE', 'BCDD', 'BCDD'])) // 8
console.log(
  solution(6, 6, ['AABBEE', 'AAAEEE', 'VAAEEV', 'AABBEE', 'AACCEE', 'VVCCEE'])
) // 32
