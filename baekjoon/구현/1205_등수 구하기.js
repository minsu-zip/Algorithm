const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()

function solution() {
  let answer = 1
  const array = input.split('\n')
  const [n, point, p] = array[0].split(' ').map(Number)
  // 테스트케이스 4
  if (n === 0) {
    return 1
  } else {
    const rank = array[1].split(' ').map(Number)
    rank.sort((a, b) => b - a)
    // 랭킹 리스트에 올라갈 수 없는 경우
    if (n === p && rank[p - 1] >= point) {
      return -1
    } else {
      // 등수 찾기
      for (let i = 0; i < n; i++) {
        if (rank[i] > point) {
          answer += 1
        }
      }
    }
  }

  return answer
}

console.log(solution())
