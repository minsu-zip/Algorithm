// 조합의 경우 수(메모이제이션)

function recursion(n, r, memoization) {
  if (memoization[n][r] > 0) {
    return memoization[n][r]
  }

  if (n === r || r === 0) {
    return 1
  }

  return (memoization[n][r] =
    recursion(n - 1, r - 1, memoization) + recursion(n - 1, r, memoization))
}

function solution(n, r) {
  let answer = 0
  let memoization = Array.from(Array(n + 1), () => Array(r + 1).fill(0))

  answer = recursion(n, r, memoization)

  return answer
}

console.log(solution(5, 3))
console.log(solution(33, 19))
