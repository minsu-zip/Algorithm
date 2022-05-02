// A, A#, B 음 자르기
const regExp = (str) => {
  return str.match(/[A-z]\#?/g)
}
// 악보에 기억한 멜로디가 있는지 판별
const isIncludes = (melody, m) => {
  const findIndex = melody.indexOf(m)
  if (findIndex !== -1) {
    // 기억하는 멜로디: "CB" 악보: "CB#ACB" 인 경우 마지막 문자# 체크 필요
    // #인 경우 다시 탐색
    if (melody[findIndex + m.length] === '#') {
      return isIncludes(melody.slice(findIndex + m.length), m)
    }
    return true
  }
  return false
}

function solution(m, musicinfos) {
  let answer = '(None)'
  let longTime = 0

  for (const music of musicinfos) {
    const [start, end, title, song] = music.split(',')
    // 분 계산
    const [sHours, sMins] = start.split(':')
    const [eHours, eMins] = end.split(':')
    const min = Math.abs(((eHours - sHours) * 3600) / 60 + (eMins - sMins))

    // 재생된 음악 전체 저장 로직
    const songArray = regExp(song)
    let melody = []
    // 음악 길이보다 재생된 시간이 짧은 경우
    if (min < songArray.length) {
      melody = songArray.slice(0, min - songArray.length)
    } else {
      // 음악 길이보다 재생된 시간이 긴 경우
      while (min > melody.length) {
        melody.push(...songArray)
      }
    }

    // 악보에 기억한 멜로디가 있는지 판별 && 일치하는 음악이 다수일 때 재생 시간 제일 긴 것
    if (isIncludes(melody.join(''), m) && longTime < min) {
      answer = title
      longTime = min
    }
  }
  return answer
}

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
) // "HELLO"
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
) // "FOO"
console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
) // "WORLD"
console.log(solution('DF', ['6:20,6:50,TEST,DDF'])) // "TEST"
console.log(solution('CCB', ['03:00,03:10,FOO,CCB#CCB', '04:00,04:08,BAR,ABC'])) // "FOO"
console.log(solution('DF', ['23:50,00:00,TEST,DDF'])) // "TEST"
