const fs = require('fs')
let [n, nArr, m, mArr] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
n = Number(n)
nArr = nArr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
mArr = mArr.split(' ').map(Number)

function solution() {
  const dic = {}
  // 중복 요소 개수 카운팅
  nArr.forEach((x) => {
    dic[x] = (dic[x] || 0) + 1
  })
  // 중복 제거
  const arr = [...new Set(nArr)]

  const answer = []

  for (const find of mArr) {
    let start = 0
    let end = arr.length - 1
    let check = false
    let mid = 0
    while (start <= end) {
      mid = parseInt((start + end) / 2)
      if (arr[mid] === find) {
        check = true
        break
      } else if (arr[mid] > find) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    answer.push(check ? dic[arr[mid]] : 0)
  }
  return answer.join(' ')
}

console.log(solution())
