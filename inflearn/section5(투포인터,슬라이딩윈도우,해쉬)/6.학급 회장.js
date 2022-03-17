// 학급 회장(해쉬)
// O(n)

function solution(str, n) {
  let answer = 0
  let map1 = new Map()

  for (let char of str) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1)
    } else {
      map1.set(char, 0)
    }
  }

  answer = [...map1.entries()].reduce((a, b) => (a[1] > b[1] ? a : b), 0)[0]
  return answer
}

let str = 'BACBACCACCBDEDE'

console.log(solution(str, 15))
