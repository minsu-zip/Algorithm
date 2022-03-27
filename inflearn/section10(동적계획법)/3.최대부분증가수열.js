// 최대 부분 증가수열 (DP)

function solution(arr, n) {
  let answer = 0
  let dp = Array.from(Array(n), () => 0)
  dp[0] = 1

  for (let i = 1; i < n; i++) {
    let max = 0
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        max = Math.max(max, dp[j])
      }
    }
    dp[i] = max + 1
  }

  //   console.log(dp) 부분 증가 수열 원소
  answer = Math.max(...dp)

  return answer
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3]
console.log(solution(arr, 9)) // 5

let arr2 = [5, 3, 7, 8, 6, 2, 9, 4]
console.log(solution(arr2, 8)) // 4
