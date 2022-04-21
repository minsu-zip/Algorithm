function solution(s) {
  // 문자열 길이가 1인 경우
  if (s.length === 1) return 1

  let answer = Infinity
  let sliceStr = new Set() // 압축된 문자열 중복 제거

  // 문자열/2 만큼이 최대 압축 길이
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let tmp = []
    for (let j = 0; j * i < s.length; j++) {
      // n개 단위로 자르기
      tmp.push(s.substr(j * i, i))
    }

    // 동일하게 존재하는 문자열 개수 파악
    let map = [[tmp[0], 1]]
    for (let k = 1; k < tmp.length; k++) {
      if (tmp[k - 1] === tmp[k]) {
        map[map.length - 1][1] = map[map.length - 1][1] + 1
      } else {
        map.push([tmp[k], 1])
      }
    }

    // 문자열 압축
    let str = ''
    map.forEach(([key, value]) => {
      if (value > 1) {
        str += value + key
      } else {
        str += key
      }
    })
    sliceStr.add(str)
  }
  // 길이가 가장 작은 문자열 찾기
  sliceStr.forEach((x) => (answer = answer < x.length ? answer : x.length))

  return answer
}

console.log(solution('aabbaccc'))
console.log(solution('ababcdcdababcdcd'))
console.log(solution('abcabcdede'))
console.log(solution('abcabcabcabcdededededede'))
console.log(solution('xababcdcdababcdcd'))
