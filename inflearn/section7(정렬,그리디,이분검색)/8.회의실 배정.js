// 회의실 배정
// O(n log(n))

function solution(arr) {
  let answer = 0
  let mettingList = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })

  let end = 0
  mettingList.forEach((element) => {
    if (element[0] >= end) {
      answer += 1
      end = element[1]
    }
  })

  return answer
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]
console.log(solution(arr))
