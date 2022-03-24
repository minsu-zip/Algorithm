// 수들의 조합 (조합 이용)

let cnt = 0

function recursion(k, n, m, i, arr) {
  if (arr.length > k) {
    return
  }

  for (let j = i; j < n.length; j++) {
    recursion(k, n, m, j + 1, [...arr, n[j]])
  }

  if (arr.length === k) {
    let sum = arr.reduce((a, b) => a + b, 0)
    if (sum % m === 0) {
      console.log(...arr)
      cnt += 1
    }
  }
}

function solution(k, n, m) {
  let answer = 0
  recursion(k, n, m, 0, [])
  answer = cnt
  return answer
}

let n = [2, 4, 5, 8, 12]
console.log(solution(3, n, 6))
