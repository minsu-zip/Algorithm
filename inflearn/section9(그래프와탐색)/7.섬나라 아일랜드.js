// 섬나라 아일랜드(BFS)

// 상, 하, 좌, 우, 왼쪽 위, 오른쪽 위, 왼쪽 아래, 오른쪽 아래
const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
const dy = [0, 0, -1, 1, -1, 1, -1, 1]

function BFS(i, j, arr) {
  let queue = []
  queue.push([i, j])
  arr[i][j] = 0
  while (queue.length) {
    let [x, y] = queue.shift()
    for (let k = 0; k < dx.length; k++) {
      let checkX = x + dx[k]
      let checkY = y + dy[k]
      if (checkLength(checkX, checkY, arr.length) && arr[checkX][checkY]) {
        queue.push([checkX, checkY])
        arr[checkX][checkY] = 0
      }
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
      if (arr[i][j]) {
        BFS(i, j, arr)
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
