// 연속 부분수열 1
// N개의 수로 이루어진 수열이 주어집니다. 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// O(n)

function solution(arr, m) {
  let result = 0,
    lt = 0,
    sum = 0

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]
    if (sum === m) result += 1

    while (sum >= m) {
      sum -= arr[lt++]
      if (sum === m) result += 1
    }
  }
  return result
}

// let a = [1, 2, 1, 3, 1, 1, 1, 2]
// let a = [1, 1, 1, 2, 4]
let a = [1, 1, 1, 1, 1, 1, 1, 8]
console.log(solution(a, 8))
