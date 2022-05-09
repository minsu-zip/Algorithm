const fs = require('fs')
const [T, ...rest] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
const arr = rest.map((x) => x.trim().split(' ').map(Number))

// 조합 경우의 수 계산 (메모리제이션)
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

function solution() {
  for (const [x, y] of arr) {
    const memoization = Array.from(Array(y + 1), () => Array(x + 1).fill(0))
    console.log(recursion(y, x, memoization))
  }
}
solution()
