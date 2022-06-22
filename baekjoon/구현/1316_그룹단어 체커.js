const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')

function solution() {
  let answer = input.length

  // 단어의 수 만큼 순회
  input.forEach((word) => {
    const check = []
    // 문자열 각 요소의 문자 순회
    for (let i = 0; i < word.length; i++) {
      // 문자가 배열에 있고 앞에 문자열과 다른 경우 -> 그룹 단어 x
      if (check.indexOf(word[i]) !== -1 && word[i] !== word[i - 1]) {
        answer -= 1
        break
      } else {
        check.push(word[i])
      }
    }
  })

  return answer
}

console.log(solution())
