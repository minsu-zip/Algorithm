const fs = require('fs')
const [N, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const n = Number(N)
const graph = input.map((x) => Number(x.trim()))

function solution() {
  // 선배의 번호, 호출한 선배의 횟수
  let answer = [0, 0]
  for (let i = 0; i < n; i++) {
    let queue = graph[i] - 1 // 배열 인덱스 0부터
    const visited = Array.from(Array(n).fill(false))
    visited[i] = true
    let cnt = 1
    while (true) {
      // 물어본적이 없는 선배인 경우
      if (visited[queue] === false) {
        visited[queue] = true
        queue = graph[queue] - 1
        cnt += 1
      }
      // 물어본적이 있는 선배의 경우
      else {
        break
      }
    }

    // 작은 선배를 출력하기 위함
    if (answer[1] < cnt) {
      answer[0] = i + 1
      answer[1] = cnt
    }
  }

  return answer[0]
}

console.log(solution())
