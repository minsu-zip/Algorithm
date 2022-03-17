// 교육과정 설계 (큐)
// O(n)

function solution(a, b) {
  let answer = true
  let essential = a.split('')

  for (let x of b) {
    if (essential.includes(x)) {
      // 필수 과목에 있고, 큐에 제일 앞에 있으면 선행 과목으로 수행 완료
      if (essential[0] === x) {
        essential.shift()
      } else {
        // 필수 과목에 있지만, 큐에 제일 앞에 있지 않으면 선행 과목 순서 x
        return false
      }
    }
  }

  // 남아있는 큐 확인
  answer = essential.length === 0 ? true : false

  return answer
}

// true
let a = 'CBA'
let b = 'CBDAGE'

// true
// let a = 'VDAG'
// let b = 'VDFSADFDG'

// false
// let a = 'VDAG'
// let b = 'VDFSDFDGSA'

// false
// let a = 'CBA'
// let b = 'CBDGE'

console.log(solution(a, b))
