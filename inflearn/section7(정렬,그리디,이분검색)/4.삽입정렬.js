// 삽입 정렬
// O(n^2)

function solution(arr) {
  let answer = [...arr]

  for (let i = 1; i < answer.length; i++) {
    let tmp = answer[i]
    for (var j = i - 1; j >= 0; j--) {
      if (tmp < answer[j]) {
        answer[j + 1] = answer[j]
      } else {
        break
      }
    }
    answer[j + 1] = tmp
  }
  return answer
}

let arr = [11, 7, 5, 6, 10, 9]
// let arr = [13, 5, 11, 7, 23, 15]

console.log(solution(arr))
