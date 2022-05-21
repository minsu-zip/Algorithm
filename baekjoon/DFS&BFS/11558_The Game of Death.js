const fs = require('fs')
const [t, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const arr = input.map((x) => Number(x))
const playerArr = []
const visited = []
// 테스트케이스 별 입력 처리
for (let i = 0; i < Number(t); i++) {
  const player = arr.shift()
  visited.push(Array.from(Array(player + 1).fill(false)))
  const tmp = [0]
  for (let j = 0; j < player; j++) {
    tmp.push(arr.shift())
  }
  playerArr.push(tmp)
}

function solution() {
  let i = 0
  let point = 1
  let cnt = 1

  while (i < playerArr.length) {
    point = playerArr[i][point]

    // 똑같은 사람이 중복해서 걸린다면 주경이는 걸리지 않는다.
    if (visited[i][point]) {
      console.log(0)
      i += 1
      point = 1
      cnt = 1
      continue
    }
    // N번째 주경이가 걸린 경우
    if (point === playerArr[i].length - 1) {
      console.log(cnt)
      i += 1
      point = 1
      cnt = 1
      continue
    }

    visited[i][point] = true
    cnt += 1
  }
}
solution()
