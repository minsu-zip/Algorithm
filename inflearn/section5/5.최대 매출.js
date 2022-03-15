// 최대 매출
// O(n)

function solution(arr, m) {
  let result = 0,
    sum = 0,
    lt = 0

  for (let i = 0; i < m; i++) {
    sum += arr[i]
  }

  // 초기 최대값
  result = sum

  for (let rt = m; rt < arr.length; rt++) {
    sum -= arr[lt++]
    sum += arr[rt]

    result = Math.max(result, sum)
  }

  return result
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]

console.log(solution(a, 3))
