function solution(arr, M) {
  let answer = 0
  let sortArr = [...arr].sort((a, b) => a - b)

  let start = 0
  let end = sortArr.length
  let mid = 0

  while (true) {
    mid = parseInt((start + end) / 2)
    if (sortArr[mid] === M) {
      answer = mid + 1
      break
    } else if (sortArr[mid] < M) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return answer
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81]
console.log(solution(arr, 32)) // 3
