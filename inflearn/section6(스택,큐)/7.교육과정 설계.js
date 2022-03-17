// 교육과정 설계 (큐)
// O(n)

function solution(a, b) {
  let answer = true

  let essential = a.split('')
  //   let course = b.split('')
  let i = 0

  for (let x of b) {
    if (essential.includes(x) && essential[0] === x) {
      essential.shift()
    } else if (essential.includes(x) && essential[0] !== x) {
      return false
    }
  }

  answer = essential.length === 0 ? true : false

  return answer
}

// true
// let a = 'CBA'
// let b = 'CBDAGE'

// true
// let a = 'VDAG'
// let b = 'VDFSADFDG'

// false
// let a = 'VDAG'
// let b = 'VDFSDFDGSA'

// false
let a = 'CBA'
let b = 'CBDGE'

console.log(solution(a, b))
