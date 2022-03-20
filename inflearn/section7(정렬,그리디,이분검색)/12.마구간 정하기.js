// 마구간 정하기 (결정 알고리즘)
// O(nlogn)

function solution(a, N) {
  let answer = 0
  let maxDistance = []
  let arrSort = [...a].sort((a, b) => a - b)

  let start = 1
  let end = arrSort[arrSort.length - 1]

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let ep = arrSort[0] // 현재 마구간의 위치
    let cnt = 1
    arrSort.forEach((x) => {
      if (x - ep >= mid) {
        ep = x
        cnt += 1
      }
    })

    // 배치한 말의 개수가 적을 때 범위를 더 작게 탐색
    if (cnt < N) {
      end = mid - 1
    }
    // 배치한 말의 개수가 충족했을 때 범위를 더 크게 해서 최대 거리 파악
    else {
      maxDistance.push(mid)
      start = mid + 1
    }
  }

  answer = Math.max(...maxDistance)
  return answer
}

let a = [1, 2, 8, 4, 9]
console.log(solution(a, 3))
