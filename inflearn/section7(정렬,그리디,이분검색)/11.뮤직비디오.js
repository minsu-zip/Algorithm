// 이분 탐색 응용
// O(nlogn)

function solution(a, M) {
  let answer = 0
  let arr = [...a]

  let start = Math.max(...arr)
  let end = arr.reduce((a, b) => a + b, 0) // 총 노래 시간
  let DVD = [] // DVD 용량

  // 제일 긴 노래 이상 ~ 총 노래 시간 사이의 조건을 이분 탐색으로 순회
  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let sum = 0
    let cnt = 1 // DVD 레코드 수
    arr.forEach((el) => {
      if (sum + el > mid) {
        DVD.push(sum)
        cnt += 1
        sum = el
      } else {
        sum += el
      }
    })
    // 마지막 노래 카운팅
    DVD.push(sum)

    // M과 DVD 개수가 같을 때
    if (M === cnt) {
      answer = Math.max(...DVD)
      break
      // M이 더 크면 용량을 더 작게 쪼개고 DVD 개수를 늘릴 수 있다.
    } else if (M > cnt) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    DVD = []
  }

  return answer
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution(a, 3))
