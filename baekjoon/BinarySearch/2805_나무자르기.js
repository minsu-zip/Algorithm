const fs = require('fs')
const [nm, arr] = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, m] = nm.split(' ').map(Number)
const tree = arr.split(' ').map(Number)

function solution() {
  let answer = []
  // 이분 탐색 범위는 모든 나무의 높이를 얻는 경우가 최대값이 되고,
  // 나무가 하나도 없는 경우가 최소값이 된다.
  let start = 0 // 최대값을 얻기 위한 시작 범위
  let end = Math.max(...tree) // 최소값을 얻기 위한 마지막 범위

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let height = 0
    // 지정한 H 높이로 자른 경우의 얻는 나무의 높이
    tree.forEach((x) => {
      height += x - mid > 0 ? x - mid : 0
    })

    if (height >= m) {
      answer.push(mid)
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return Math.max(...answer)
}
console.log(solution())
