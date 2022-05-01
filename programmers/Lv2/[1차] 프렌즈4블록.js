// 높이, 폭
let M = 0
let N = 0
// 오른쪽, 아래, 오른쪽 아래
const dx = [0, 1, 1]
const dy = [1, 0, 1]

// 인덱스 검증
const isRange = (dx, dy) => {
  if (dx >= 0 && dy >= 0 && dx < M && dy < N) {
    return true
  }
  return false
}

const bfs = (graph, visited, removeBoard, i, j) => {
  // 오른쪽, 아래, 오른쪽아래
  const queue = [[i, j]]
  const character = graph[i][j]
  // 없애야하는 블록의 수 및 위치 저장
  let result = false

  while (queue.length) {
    // 여기서 꺼낸 좌표에서 오른쪽, 왼쪽 아래, 오른쪽 아래를 전부 만족 시킬 경우만
    // 블록 제거 즉 2x2로 붙어있는 형태가 되어야 한다.
    const [x, y] = queue.shift()

    // 2x2 붙어있는지 확인
    let cnt = 1
    for (let k = 0; k < 3; k++) {
      const mx = x + dx[k]
      const my = y + dy[k]
      // 문자가 같은 경우 2x2 내에 범위이다
      cnt += isRange(mx, my) && graph[mx][my] === character ? 1 : 0
    }

    // 4개인 경우 2x2로 붙어있다 -> queue 삽입, 삭제 위치저장, 방문 처리
    if (cnt === 4) {
      result = true
      for (let k = 0; k < 3; k++) {
        const mx = x + dx[k]
        const my = y + dy[k]
        if (visited[mx][my]) {
          visited[mx][my] = false
          removeBoard.push([mx, my])
          queue.push([mx, my])
        }
      }
    }
  }

  return result
}

// 블록 제거 로직
const success = (graph) => {
  graph.forEach((block, i) => {
    block.forEach((item, j) => {
      if (item === 1) {
        let k = i
        while (k > 0) {
          graph[k][j] = graph[k - 1][j]
          k -= 1
        }
        graph[k][j] = 0
      }
    })
  })
}

function solution(m, n, board) {
  // 2x2 범위에 있는 경우 1로 초기화(방문 처리)
  // 블록을 제거한 경우 빈 공간은 0으로 초기화
  M = m
  N = n
  let answer = 0
  const graph = board.map((x) => x.split(''))
  let k = 0

  while (k < graph.length) {
    const visited = Array.from(Array(M), () => Array(N).fill(true)) // 방문 여부
    let removeBoard = []
    // [문제 조건] 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.
    graph.forEach((blocks, i) => {
      blocks.forEach((block, j) => {
        if (typeof block === 'string') {
          let result = bfs(graph, visited, removeBoard, i, j)
          if (result) {
            removeBoard.push([i, j])
          }
        }
      })
    })

    if (removeBoard.length) {
      // 방문된 위치 1로 초기화
      while (removeBoard.length) {
        let [x, y] = removeBoard.shift()
        if (graph[x][y] !== 1) {
          graph[x][y] = 1
          answer += 1
        }
      }
      // 2x2가 있는 경우 블록 제거
      // 블록 제거 후 위의 블록들이 다시 2x2가 될 수 있으므로 다시 순회
      success(graph)
      k = 0
    } else {
      k += 1
    }
  }

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
