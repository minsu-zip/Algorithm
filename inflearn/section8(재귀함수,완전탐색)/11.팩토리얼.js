// 팩토리얼

function recursion(n) {
  if (n === 1) {
    return 1
  }

  return n * recursion(n - 1)
}

function solution(n) {
  let answer = 0
  answer = recursion(n)

  return answer
}

console.log(solution(5))
