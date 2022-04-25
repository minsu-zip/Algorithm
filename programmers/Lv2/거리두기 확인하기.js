function solution(places) {
  let answer = []
  let people = []

  places.forEach((room) => {
    // n번째 대기실 별로 응시자의 좌표 저장
    room.forEach((place, j) => {
      place
        .split('')
        .forEach((x, idx) => (x === 'P' ? people.push([j, idx]) : ''))
    })

    let check = true

    // n번째 대기실 모든 응시자끼리의 거리두기 확인
    for (let n = 0; n < people.length - 1; n++) {
      let [r1, c1] = people[n]
      for (let m = n + 1; m < people.length; m++) {
        let [r2, c2] = people[m]

        // 맨허튼 거리 계산 -> 2 이하라면 거리두기 체크
        if (Math.abs(r1 - r2) + Math.abs(c1 - c2) <= 2) {
          let si = Math.min(r1, r2)
          let sj = Math.max(r1, r2)
          let ei = Math.min(c1, c2)
          let ej = Math.max(c1, c2)
          let table = 0 // 응시자 사이에 존재하는 빈 테이블 수
          let partition = 0 // 응시자 사이에 존재하는 파티션 수
          for (let i = si; i <= sj; i++) {
            for (let j = ei; j <= ej; j++) {
              if (room[i][j] === 'O') {
                table += 1
              } else if (room[i][j] === 'X') {
                partition += 1
              }
            }
          }

          // 맨허튼 거리 2 이하의 응시자들 사이에
          // 빈 테이블이 있거나 파티션 개수가 없는 경우 해당 대기실에서는 거리두기 X
          if (table > 0 || partition === 0) check = false
        }
      }
    }
    answer.push(check ? 1 : 0)
    people = []
  })

  return answer
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
)
