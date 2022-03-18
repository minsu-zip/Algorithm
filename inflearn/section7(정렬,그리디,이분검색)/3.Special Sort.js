// 구글 인터뷰 문제
// O(n^2)

function solution(arr) {
  let answer = [...arr]
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 1; j < answer.length - i; j++) {
      if (answer[j - 1] > 0 && answer[j] < 0) {
        ;[answer[j - 1], answer[j]] = [answer[j], answer[j - 1]]
      }
    }
  }
  return answer
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution(arr))
