const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('../input.txt')
  .toString()
  .split('\n')
  .map((el) => el.trim())

function solution() {
  let answer = input.length

  // 단어의 수 만큼 순회
  for (let word of input) {
    const wordList = word.split('') // 문자열 쪼개기
    const check = new Map()
    // 쪼갠 문자열 순회
    for (let i = 0; i < wordList.length; i++) {
      // 문자가 객체에 존재할 시
      if (check.has(wordList[i])) {
        const number = check.get(wordList[i])
        // 현재 인덱스 -1이 객체에 존재하는 값이라면 연속해서 나타나서 그룹 단어이다.
        if (i - 1 == number) {
          check.set(wordList[i], i)
        }
        // 인덱스가 안 맞다면 그룹 단어가 아니다.
        else {
          answer -= 1
          break
        }
      }
      // 객체에 없는 경우 key:현재값, value:현재 인덱스
      else {
        check.set(wordList[i], i)
      }
    }
  }

  return answer
}

console.log(solution())
