// 연속 부분수열 2
// N개의 수로 이루어진 수열이 주어집니다.이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// O(n)

function solution(arr, m) {
  let result = 0,
    sum = 0,
    rt = 0

  for (let lt = 0; lt < arr.length; lt++) {
    rt = lt
    sum = arr[rt++]

    while (sum <= m && rt <= arr.length) {
      result += 1
      sum += arr[rt++]
    }
  }
  return result
}

let a = [1, 3, 1, 2, 3]
// let a = [1, 2, 1, 3, 1, 2, 1]
// let a = [1, 1, 1, 1, 1]
console.log(solution(a, 5))
