function solution(s) {
  let answer = []
  let tuple = {}

  // 중괄호 사이 숫자들 추출
  let regExp = s.match(/[^{\}]+(?=})/g)
  // "," 기준으로 자르기 -> 각 원소들 추출
  let arr = regExp.map((x) => x.split(','))

  // 각 원소들의 개수 cnt
  arr.forEach((element) =>
    element.forEach((x) => (tuple[x] = (tuple[x] || 0) + 1))
  )

  // 개수 기준으로 정렬 후 원소 추출
  answer = Object.entries(tuple)
    .sort((a, b) => b[1] - a[1])
    .map((x) => Number(x[0]))

  return answer
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')) // [2 1 3 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')) // [2 1 3 4]
console.log(solution('{{20,111},{111}}')) // [111 20]
console.log(solution('{{123}}')) // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')) // [3 2 4 1]
