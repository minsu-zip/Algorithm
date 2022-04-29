// 조합
const getCombinations = (arr, selectNumber) => {
  const results = []
  if (selectNumber === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combinations = getCombinations(rest, selectNumber - 1)
    const attached = combinations.map((el) => [fixed, ...el])
    results.push(...attached)
  })

  return results
}

// 유일성
const uniqueness = (relation, comb) => {
  let result = Array.from(Array(relation.length).fill(''))
  // 조합에 해당하는 값을 전부 저장
  comb.forEach((x) => {
    relation.forEach((y, i) => (result[i] += y[x] || ''))
  })

  return relation.length === [...new Set(result)].length
}

// 희소성
const minimality = (keys, comb) => {
  for (const key of keys) {
    // key값의 모든 요소가 조합의 부분 집합인지 판단
    if (key.every((x) => comb.includes(x))) return false
  }
  return true
}

function solution(relation) {
  const keys = []
  const col = Array.from(Array(relation[0].length), (_, i) => i)

  for (let i = 1; i <= relation[0].length; i++) {
    const combinations = getCombinations(col, i)
    combinations.forEach((comb) => {
      // 유일성 && 희소성
      if (uniqueness(relation, comb) && minimality(keys, comb)) {
        keys.push(comb)
      }
    })
  }

  return keys.length
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
)

// console.log(
//   solution([
//     ['ab', 'c'],
//     ['a', 'bc'],
//     ['x', 'yz'],
//     ['x', 'c'],
//   ])
// )

// console.log(
//   solution([
//     ['100', '100', 'ryan', 'music', '2'],
//     ['200', '200', 'apeach', 'math', '2'],
//     ['300', '300', 'tube', 'computer', '3'],
//     ['400', '400', 'con', 'computer', '4'],
//     ['500', '500', 'muzi', 'music', '3'],
//     ['600', '600', 'apeach', 'music', '2'],
//   ])
// )
