// 아나그램(해쉬)
// O(n)

function solution(a, b) {
  let answer = 'YES'
  let mapA = new Map()
  let mapB = new Map()

  for (let str of a) {
    if (mapA.has(str)) {
      mapA.set(str, mapA.get(str) + 1)
    } else {
      mapA.set(str, 1)
    }
  }

  for (let str of b) {
    if (mapB.has(str)) {
      mapB.set(str, mapB.get(str) + 1)
    } else {
      mapB.set(str, 1)
    }
  }

  for (let [key, val] of mapA) {
    if (mapB.has(key) && val !== mapB.get(key)) {
      answer = 'NO'
      break
    }
  }

  return answer
}

// const a = 'AbaAeCe'
// const b = 'baeeACA'
const a = 'abaCC'
const b = 'Caaab'

console.log(solution(a, b))
