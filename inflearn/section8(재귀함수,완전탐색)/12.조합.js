// 조합의 경우 수(메모이제이션)

function recursion(n, r) {
  if (n === r || r === 0) {
    return 1
  }

  return recursion(n - 1, r - 1) + recursion(n - 1, r)
}

function solution(n, r) {
  let answer = 0
  answer = recursion(n, r)

  return answer
}

console.log(solution(5, 3))
console.log(solution(33, 19))
