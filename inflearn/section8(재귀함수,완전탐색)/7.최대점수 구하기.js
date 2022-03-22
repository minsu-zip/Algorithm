// 최대점수 구하기(DFS)

let score = 0

function DFS(arr, T, i, sum, e) {
  // 풀이 시간이 제한 시간보다 경과 했을 경우, 마지막 문제는 제외
  if (T < e) {
    score = Math.max(score, sum - arr[i - 1][0])
    return
  }

  // 다 풀었지만 제한 시간을 경과하지 않았을 경우 전체 포함
  if (i >= arr.length) {
    score = Math.max(score, sum)
    return
  }

  DFS(arr, T, i + 1, sum + arr[i][0], e + arr[i][1])
  DFS(arr, T, i + 1, sum, e)
}

function solution(N, T) {
  let answer = 0
  let arr = [...N].sort((a, b) => b[0] - a[0])
  console.log(arr)

  // 문제, 제한시간, 배열 인덱스, 누적 점수, 경과 시간
  DFS(arr, T, 0, 0, 0)
  answer = score

  return answer
}

let N = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]
console.log(solution(N, 20))
