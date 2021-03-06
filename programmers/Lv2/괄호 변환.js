// 옳바른 괄호 체크
function isBracket(s) {
  if (s.length % 2 !== 0) return false
  let compare = []
  let stack = [...s]

  for (let i = 0; i < s.length; i++) {
    let tmp = stack.pop()
    if (tmp === ')') {
      compare.push(tmp)
    } else if (tmp === '(' && compare.length > 0) {
      compare.pop()
    } else {
      return false
    }
  }
  if (stack.length > 0 || compare.length > 0) {
    return false
  }
  return true
}

// 균형잡인 괄호 체크
function isBalance(s) {
  let check = 0
  s.forEach((x) => (check += x === '(' ? 1 : -1))
  return check === 0 ? true : false
}

function DivideUV(p) {
  let left = 0
  let right = 0
  let u = []
  let v = []
  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? (left += 1) : (right += 1)
    if (left === right) {
      u = p.slice(0, i + 1)
      v = p.slice(i + 1)
      break
    }
  }

  return [u, v]
}

function solution(p) {
  let answer = ''
  let strArr = p.split('')

  if (isBracket(strArr)) return p

  const rec = (p) => {
    if (p.length === 0) return ''
    let result = ''
    let [u, v] = DivideUV(p) // 2

    if (isBalance(u)) {
      // 3
      if (isBracket(u)) {
        result = u.join('') + rec(v)
      }
      // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
      else {
        let str = '('
        str += rec(v) // 4-2
        str += ')'
        u.shift()
        u.pop()
        // 4-4
        u.forEach((x) => (str += x === '(' ? ')' : '('))
        result = str
      }
    }
    return result
  }

  answer = rec(strArr)
  return answer
}

console.log(solution('(()())()')) // "(()())()"
console.log(solution(')(')) // "()"
console.log(solution('()))((()')) // "()(())()"
