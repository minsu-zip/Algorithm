// 섬나라 아일랜드(DFS)

// 상, 하, 좌, 우, 왼쪽 위, 오른쪽 위, 왼쪽 아래, 오른쪽 아래
const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
const dy = [0, 0, -1, 1, -1, 1, -1, 1]

function DFS(arr, x, y) {
  arr[x][y] = 0 // 방문 처리

  for (let i = 0; i < dx.length; i++) {
    let checkX = x + dx[i]
    let checkY = y + dy[i]

    // 유효한 배열 범위 & 방문 하지 않았을 경우
    if (checkLength(checkX, checkY, arr.length) && arr[checkX][checkY]) {
      DFS(arr, checkX, checkY)
    }
  }
}

// 배열의 인덱스 범위 체크 함수
function checkLength(checkX, checkY, n) {
  if (checkX >= 0 && checkY >= 0 && checkX < n && checkY < n) return true
  else return false
}

function solution(n, arr) {
  let answer = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 방문하지 않은 경우 탐색 완료 후, 섬 개수 카운트
      if (arr[i][j]) {
        DFS(arr, i, j)
        answer += 1
      }
    }
  }

  return answer
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]
console.log(solution(7, arr))
