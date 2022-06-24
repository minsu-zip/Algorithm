const fs = require('fs')
const arr = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('')
  .map(Number)

function solution() {
  // 숫자 요소 갯수 세기
  const result = {}
  arr.forEach((x) => {
    // 6과 9는 뒤집을 수 있으므로 하나로 저장
    if (x === 6 || x === 9) {
      result[6] = (result[6] || 0) + 1
    } else {
      result[x] = (result[x] || 0) + 1
    }
  })

  // 뒤집어서 사용하는 연산
  result[6] = Math.ceil(result[6] / 2)

  // 숫자 중에 가장 많이 존재하는 숫자 번호 찾기
  let maxNumber = 0
  let max = 0
  for (const [key, value] of Object.entries(result)) {
    if (max < value) {
      maxNumber = key
      max = value
    }
  }

  return result[maxNumber]
}

console.log(solution())
