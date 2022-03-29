function solution(sizes) {
  let answer = 1

  // 가로의 길이를 제일 긴 변으로 설정 후 회전
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      ;[sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]
    }
  }

  // 가로의 최대값 * 세로의 최대값 = 최소 지갑
  let x = sizes.sort((a, b) => b[0] - a[0])[0][0]
  let y = sizes.sort((a, b) => b[1] - a[1])[0][1]
  answer = x * y
  return answer
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
) // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
) // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
) // 133
