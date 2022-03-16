// 올바른 괄호(스택)
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// O(n)

function solution(s) {
  let answer = true
  let stack = []
  let compare = []

  for (let x of s) {
    stack.push(x)
  }

  // 홀수일 경우 짝이 안 맞는다.
  if (stack.length % 2 !== 0) return false

  for (let i = 0; i < s.length; i++) {
    let tmp = stack.pop()

    if (tmp === ')') {
      compare.push(tmp)
    } else if (tmp === '(' && compare.length > 0) {
      compare.pop()
    } else {
      return false
    }
  }

  // 둘 중 하나의 스택이 남아있는 경우
  if (stack.length > 0 || compare.length > 0) {
    return false
  }

  return answer
}

let s = '(()(()))(()' // false
let s1 = '((()()))' // true
let s2 = '((()())))' // false
let s3 = '(((()()))' // false
console.log(solution(s3))
