function solution(msg) {
  var answer = []
  const dic = {}
  let end = 'Z' // 객체의 마지막을 기억하는 변수
  for (let i = 65; i < 91; i++) {
    dic[String.fromCharCode(i)] = i - 64
  }

  let str = ''
  for (const s of msg) {
    str += s
    if (str.length <= 1) continue
    if (dic[str]) continue // 사전에 해당 문제 존재하는 경우

    // 마지막 문자 제거 후 사전에서 탐색
    answer.push(dic[str.slice(0, -1)])
    // 사전에 해당 정보 저장
    dic[str] = dic[end] + 1 // 객체 마지막에 존재하는 값 + 1
    end = str
    str = s
  }
  answer.push(dic[str])

  return answer
}

console.log(solution('KAKAO')) // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')) // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution('ABABABABABABABAB')) // [1, 2, 27, 29, 28, 31, 30]
