// 송아지 찾기 (BFS: 상태트리탐색)

function solution(S, E) {
  let answer = 1 // 연산 편의를 위한 1부터 시작
  let queue = [S] // 처음 나의 위치
  let visited = [] // 중복 숫자 처리를 위한 방문 처리 배열

  while (true) {
    let tmp = []

    let n = queue.length // queue.shift 할 경우 길이가 반복문 수행시 달라짐
    for (let i = 0; i < n; i++) {
      let firstQueue = queue.shift()
      // 방문한적 없는 숫자일 경우만 계산을 위한 tmp 배열 삽입 및 방문 처리
      if (!visited.includes(firstQueue)) {
        tmp.push(firstQueue)
        visited.push(firstQueue)
      }
    }

    // 점프 연산
    for (let j = 0; j < tmp.length; j++) {
      queue.push(tmp[j] - 1)
      queue.push(tmp[j] + 1)
      queue.push(tmp[j] + 5)
    }

    // E 값이 있을 경우 송아지 찾기 완료
    if (queue.includes(E)) {
      console.log(queue)
      break
    }
    answer += 1
  }

  return answer
}

console.log(solution(5, 14)) // 3
console.log(solution(8, 3)) // 5
