// 조합 구하기 (중요)

let combination = []

function recursion(n, r, arr) {
  // 배열 길이가 r 보다 클 때
  if (arr.length > r) {
    return
  }

  // arr 마지막 배열 +1 부터 반복문을 실행해야지 중복값이 안들어감
  // 처음 arr 배열은 undefined이기 때문에 || 1을 통해 1로 초기화
  for (let j = arr[arr.length - 1] + 1 || 1; j <= n; j++) {
    recursion(n, r, [...arr, j])
  }
  if (arr.length === r) {
    console.log(...arr)
    combination.push(arr)
  }
}

function solution(n, r) {
  let answer = 0
  let memoization = Array.from(Array(n + 1), () => Array(r + 1).fill(0))

  recursion(n, r, [])
  answer = combination.length
  return answer
}

console.log(solution(4, 2))
// console.log(solution(33, 19))
