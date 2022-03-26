// 미로탐색(DFS)

// 배열 상 하 좌 우 탐색
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let cnt = 0

function DFS(arr, x, y) {
  if (x === 6 && y === 6) {
    cnt += 1
    return
  }

  for (let i = 0; i < 4; i++) {
    const checkX = x + dx[i]
    const checkY = y + dy[i]
    // 배열 인덱스 체크
    if (checkLength(checkX, checkY, arr.length)) {
      // 통로일 경우
      if (!arr[checkX][checkY]) {
        arr[x][y] = 1
        DFS(arr, checkX, checkY)
        arr[x][y] = 0
      }
    }
  }
}

// 배열의 인덱스 범위 체크 함수
function checkLength(checkX, checkY, n) {
  if (checkX >= 0 && checkY >= 0 && checkX < n && checkY < n) return true
  else return false
}

function solution(arr) {
  let answer = 0
  DFS(arr, 0, 0)
  answer = cnt
  return answer
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]
console.log(solution(arr))
