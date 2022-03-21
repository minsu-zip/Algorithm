// 재귀함수를 이용한 이진수 출력

function recursion(n, answer) {
  if (n === 0) return
  recursion(parseInt(n / 2), answer)
  answer.push(n % 2)
}

function solution(n) {
  let answer = []
  recursion(n, answer)

  return answer.join('')
}

console.log(solution(11))
