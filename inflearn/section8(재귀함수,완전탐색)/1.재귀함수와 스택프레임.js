// 재귀함수
// O(n)
function recursion(n, answer) {
  if (n <= 0) {
    return
  }

  recursion(n - 1, answer)
  answer.push(n)
}

function solution(n) {
  let answer = []
  recursion(n, answer)

  return answer
}

let n = 3
console.log(solution(n))
