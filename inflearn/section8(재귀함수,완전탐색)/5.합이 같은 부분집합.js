// 합이 같은 부분집합(DFS : 아마존 인터뷰)

let flag = false // 합이 같은지 판단 변수
function recursion(arr, i, sum, total) {
  if (flag) return

  if (i >= arr.length) {
    if (total - sum === sum) {
      flag = true
    }
    return
  }

  recursion(arr, i + 1, sum + arr[i], total)
  recursion(arr, i + 1, sum, total)
}

function solution(a) {
  let answer = false
  let arr = [...a]
  let total = [...a].reduce((a, b) => a + b, 0)
  // 배열, 시작 인덱스, 총합
  recursion(arr, 0, 0, total)
  answer = flag
  return answer
}

let a = [1, 3, 5, 6, 7, 10]
console.log(solution(a))
