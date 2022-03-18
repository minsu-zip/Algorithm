// 버블 정렬
// O(n^2)

function solution(arr) {
  let answer = [...arr]
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 1; j < answer.length - i; j++) {
      if (answer[j - 1] > answer[j]) {
        ;[answer[j - 1], answer[j]] = [answer[j], answer[j - 1]]
      }
    }
  }
  return answer
}

let arr = [13, 5, 11, 7, 23, 15]
console.log(solution(arr))
