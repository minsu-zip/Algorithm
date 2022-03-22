// 바둥이 승차(DFS)

let maxW = 0

function DFS(C, arr, i, sum) {
  // 태운 바둑이들이 C보다 넘을 경우 마지막 바둑이는 제외해야하므로 -1
  if (C < sum) {
    maxW = Math.max(maxW, sum - arr[i - 1])
    return
  }
  // 모든 바둑이들을 태웠지만 C보다 안 넘을 수도 있기 때문에 모든 바둑이 태웠을 경우에도 최댓값에 포함
  if (i >= arr.length) {
    maxW = Math.max(maxW, sum)
    return
  }
  DFS(C, arr, i + 1, sum + arr[i])
  DFS(C, arr, i + 1, sum)
}

function solution(C, W) {
  let answer = 0
  let arr = [...W].sort((a, b) => b - a)
  DFS(C, arr, 0, 0)
  answer = maxW
  return answer
}

let W = [81, 58, 42, 33, 61]
console.log(solution(259, W))
