const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim()

function solution() {
  const n = Number(input)
  const array = Array.from(Array(n), (_, i) => i + 1)
  const answer = []
  while (array.length > 0) {
    // 제일 위에 카드 버리기
    answer.push(array.shift())
    // 제일 아래로 옮기기
    array.push(array.shift())
  }

  return answer.join(' ')
}
console.log(solution())
