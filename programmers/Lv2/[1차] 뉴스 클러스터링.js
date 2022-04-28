function strSlice(str) {
  const array = []
  // 2개씩 자르기
  for (let i = 0; i < str.length - 1; i++) {
    array.push(str.substr(i, 2))
  }

  const result = {}
  // 문자열 추출 -> 정렬 -> undefined 제거 -> 문자 개수 세기
  array
    .flatMap((x) => x.toUpperCase().match(/^[a-zA-Z]*$/g))
    .sort()
    .filter(Boolean)
    .forEach((x) => (result[x] = (result[x] || 0) + 1))

  return result
}

function solution(str1, str2) {
  let answer = 0
  const str1Arr = strSlice(str1)
  const str2Arr = strSlice(str2)

  // 교집합
  const intersection = {}
  for (const [key, value] of Object.entries(str2Arr)) {
    if (str1Arr[key]) {
      intersection[key] = Math.min(str1Arr[key], value)
    }
  }
  // 교집합 개수
  let intersectionSize = Object.values(intersection).reduce(
    (acc, cur) => acc + cur,
    0
  )

  // 합집합
  const union = { ...str1Arr }
  for (const [key, value] of Object.entries(str2Arr)) {
    union[key] = union[key] ? Math.max(union[key], value) : value
  }
  // 합집합 개수
  const unionSize = Object.values(union).reduce((acc, cur) => acc + cur, 0)

  answer = parseInt((intersectionSize / unionSize) * 65536)
  return isNaN(answer) ? 65536 : answer
}

console.log(solution('FRANCE', 'french'))
console.log(solution('handshake', 'shake hands'))
console.log(solution('aa1+aa2', 'AAAA12'))
console.log(solution('E=M*C^2', 'e=m*c^2'))
