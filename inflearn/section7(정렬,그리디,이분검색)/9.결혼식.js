// O(n log(n))
// 도착시간, 종료시간 기준으로 각각 정렬
// 투 포인트를 이용해서 도착시간이 종료시간보다 작으면 입장으로 간주
// 종료 시간이 같거나 크면 퇴장으로 간주

function solution(arr) {
  let answer = 0

  let arrival = [] // 도착 시간
  let exit = [] // 퇴장 시간
  arr.forEach((element) => {
    arrival.push(element[0])
    exit.push(element[1])
  })

  arrival.sort((a, b) => a - b)
  exit.sort((a, b) => a - b)

  let cnt = 0 // 겹치는 인원 카운트
  let i = 0 // arrival Index
  let j = 0 // exit Index
  while (i < arrival.length + 1 && j < exit.length) {
    if (arrival[i] < exit[j]) {
      cnt += 1
      i += 1
    } else {
      cnt -= 1
      j += 1
    }
    answer = answer > cnt ? answer : cnt
  }
  return answer
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]
console.log(solution(arr)) // 2
