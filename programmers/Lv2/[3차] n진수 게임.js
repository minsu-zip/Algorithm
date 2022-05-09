function solution(n, t, m, p) {
  var answer = ''
  const tmp = []
  let i = 0

  // 말해야하는 숫자 갯수 * 인원 수 = 튜브가 말해야하는 정보가 포함
  while (t * m > tmp.length) {
    tmp.push(...i.toString(n).split(''))
    i += 1
  }

  // 배열 인덱스는 0부터(-1)
  let index = p - 1
  while (answer.length < t) {
    answer += tmp[index]
    index += m
  }

  return answer.toUpperCase()
}

console.log(solution(2, 4, 2, 1)) // "0111"
console.log(solution(16, 16, 2, 1)) // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)) // "13579BDF01234567"
